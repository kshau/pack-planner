"use client"

import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Chart, ArcElement} from 'chart.js'
import { Pie } from 'react-chartjs-2';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Category from "@/components/custom/packs/Category";
import { Check, CirclePlus, Link, PieChart, Save } from "lucide-react";


import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/custom/Navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getTotalCategoryWeight, getTotalWeight } from "@/lib/weights";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { errorToast } from "@/lib/error-toast";
import { getTotalCategoryPrice, getTotalPrice } from "@/lib/prices";

Chart.register(ArcElement);

export default function Pack({ params }) {

  const {data: session} = useSession();

  const [packData, setPackData] = useState(null);
  const [packName, setPackName] = useState("");
  const [packId, setPackId] = useState("");
  const [savedChanges, setSavedChanges] = useState(false);

  const [categoryElems, setCategoryElems] = useState([]);

  const [pieChartData, setPieChartData] = useState({
    "labels": [],
    "datasets": [
      {
        "label": "",
        "data": [],
        "backgroundColor": [],
        "borderWidth": 0,
      },
    ],
  });

  const { toast } = useToast();

  const getPack = () => {

    axios.post("/api/getPack", {
      packId: params.packId
    }).then(response => {

      const {pack} = response.data;

      delete pack.ownerId;
      setPackData(pack);

      const {id, name, categories} = pack;
      setPackName(name);
      setPackId(id);

      const updatedCategoryElems = categories.map(category => (
        <Category data={category}/>
      ));
      
      setCategoryElems(updatedCategoryElems);

    })
    .catch(err => {
      toast(errorToast);
      console.error(err);
    })

  }

  const savePack = () => {

    axios.post("/api/savePack", 
      {
        pack: {categories: packData.categories, name: packName, id: packId}
      }, 
      { withCookies: true }
    ).then(response => {

      setSavedChanges(true);

      setTimeout(() => {
        setSavedChanges(false)
      }, 2000)

    }).catch(err => {
      toast(errorToast);
      console.error(err);
    })

  }

  const copyPackLinkToClipboard = () => {

    navigator.clipboard.writeText(`${location.origin}/packs/${packId}`);

    toast({
      title: "Link copied to clipboard!", 
      description: "You can share this pack with others by sending them this link!"
    })

  }

  const addCategoryElem = () => {
    setCategoryElems(o => [...o, <Category/>]);
  }

  const updatePackData = () => {

    const data = {
      "name": packName,
      "categories": []
    }

    const categoryElems = document.querySelectorAll("#categoryElem");
    const categoryElemsArr = Array.from(categoryElems);

    categoryElemsArr.forEach(elem => {
      
      const categoryName = elem.querySelector("#categoryName").value;
      const categoryColor = elem.querySelector("#categoryColor").innerText;

      const itemElems = elem.querySelectorAll("#itemElem");

      const category = {
        "name": categoryName, 
        "color": categoryColor,
        "items": []
      }

      itemElems.forEach(itemElem => {

        const itemName = itemElem.querySelector("#itemName").value;
        const itemDescription = itemElem.querySelector("#itemDescription").value;
        const itemPrice = itemElem.querySelector("#itemPrice").value;
        const itemWeightNumber = itemElem.querySelector("#itemWeightNumber").value;
        const itemWeightUnit = itemElem.querySelector("#itemWeightUnit").value;
        const itemAmount = itemElem.querySelector("#itemAmount").value;
        const itemUrl = itemElem.querySelector("#itemUrl").innerText;
        
        category.items.push({
          "name": itemName, 
          "description": itemDescription, 
          "price": itemPrice,
          "weight": {
            "number": itemWeightNumber, 
            "unit": itemWeightUnit
          }, 
          "amount": itemAmount, 
          "url": itemUrl
        });

      })

      data.categories.push(category);
    })

    
    setPackData(data);
    return data;

  }

  const updatePieChart = () => {

    const data = updatePackData();

    const labels = [];
    const proportions = [];
    const colors = [];

    data.categories.forEach(category => {

      const totalWeight = getTotalCategoryWeight(category.items);

      proportions.push(totalWeight);
      labels.push(category.name);
      colors.push(category.color);

    })
    
    setPieChartData({
      "labels": labels, 
      "datasets": [{
        "label": "Weights", 
        "data": proportions, 
        "backgroundColor": colors
      }]
    })

  }

  useEffect(() => {

    getPack();

    setInterval(updatePieChart, 200);

  }, []);

  return (
    
    <Navigation>

      <div className="flex flex-row m-5 gap-1">

        <Input className="w-96 text-2xl" placeholder="Pack name" onChange={event => {setPackName(event.target.value)}} defaultValue={packName} maxLength={32}/>

        <Button className="flex gap-2" onClick={savePack} disabled={savedChanges || !packData || !session || packData.ownerId != session.sub}>
          {savedChanges ? (
            <Check/>
          ) : (
            <Save/>
          )}
          <span>
            Save changes
          </span>
        </Button>

        <Button className="flex gap-2" onClick={copyPackLinkToClipboard} variant="ghost">
          <Link/>
          <span>
            Share
          </span>
        </Button>

      </div>

      <Card className="m-5">
        <CardHeader>
          <CardTitle>
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row gap-16">

          <div className="w-80">
            <Pie data={pieChartData}/>
          </div>

          <Table className="w-[30rem]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1">Category</TableHead>
                <TableHead className="w-1">Price</TableHead>
                <TableHead className="w-1">Weight (lbs)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packData ? packData.categories.map(category => (
                  <TableRow>
                    <TableCell className="flex flex-row gap-2">
                      <div style={{backgroundColor: category.color}} className="w-5 h-5"></div>
                      <span>
                        {category.name}
                      </span>
                    </TableCell>
                    <TableCell>
                      ${getTotalCategoryPrice(category.items)}
                    </TableCell>
                    <TableCell>
                      {getTotalCategoryWeight(category.items)}
                    </TableCell>
                  </TableRow>
                )) : <></>}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="font-bold flex justify-end">
                  Total:
                </TableCell>
                <TableCell className="font-bold">
                  ${packData ? getTotalPrice(packData.categories) : ""}
                </TableCell>
                <TableCell className="font-bold">
                  {packData ? getTotalWeight(packData.categories) : ""}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>

        </CardContent>
      </Card>

      {categoryElems}

        <Button className="flex gap-2 m-5" onClick={addCategoryElem}>
          <CirclePlus />
          <span>
            Add category
          </span>
        </Button>

    </Navigation>

  )
}
