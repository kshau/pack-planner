"use client"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Chart, ArcElement} from 'chart.js'
import { Pie } from 'react-chartjs-2';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Category from "@/components/custom/home/Category";
import { CirclePlus } from "lucide-react";

Chart.register(ArcElement);

const e = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Votes',
      data: [5, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const itemData = [
  {
    "name": "Essentials", 
    "items": [
      {
        "name": "Backpack", 
        "description": "Banana description ahahahahahahaha", 
        "weight": {
          "number": 30, 
          "unit": "lbs"
        }, 
        "amount": "1"
      }
    ]
  }
]

export default function Home() {

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

  useEffect(() => {
    const updatedCategoryElems = itemData.map(category => (
      <Category key={category.name} data={category} />
    ));
    
    setCategoryElems(updatedCategoryElems);
  }, []);


  const addCategoryElem = () => {
    
    setCategoryElems(o => [...o, <Category/>]);
  }

  const getItemData = () => {

    const data = [];

    const categoryElems = document.querySelectorAll("#categoryElem");
    const categoryElemsArr = Array.from(categoryElems);

    categoryElemsArr.forEach(elem => {
      
      const categoryName = elem.querySelector("#categoryName").value;

      const itemElems = elem.querySelectorAll("#itemElem");

      const category = {
        "name": categoryName, 
        "items": []
      }

      itemElems.forEach(itemElem => {

        const itemName = itemElem.querySelector("#itemName").value;
        const itemDescription = itemElem.querySelector("#itemDescription").value;
        const itemWeightNumber = itemElem.querySelector("#itemWeightNumber").value;
        const itemAmount = itemElem.querySelector("#itemAmount").value;
        
        category.items.push({
          "name": itemName, 
          "description": itemDescription, 
          "weight": {
            "number": itemWeightNumber
          }, 
          "amount": itemAmount
        });

      })

      data.push(category);
    })

    
    return data;

  }

  const updatePieChart = () => {

    const data = getItemData();

    const labels = [];
    const proportions = [];

    for (const category in data) {

      var totalWeight = 0;

      for (const item in category.items) {
        totalWeight += parseFloat(item.weight.number) * parseInt(item.amount);
      }

      proportions.push(totalWeight);
      labels.push(category.name);
    }

    setPieChartData({
      "labels": labels, 
      "datasets": {
        "label": "Weights", 
        "data": proportions, 
        "backgroundColor": ["#000000", "#ffffff"], 
        "borderWidth": 1
      }
    })

  }

  return (
    
    <div>

      <Card className="m-5">
        <CardHeader>
          <CardTitle>
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="w-80">
          <Pie data={pieChartData}/>
          <Button onClick={updatePieChart}>
            Update Chart
          </Button>
        </CardContent>
      </Card>

      {categoryElems}

        <Button className="flex gap-2 m-5" onClick={addCategoryElem}>
          <CirclePlus />
          <span>
            Add category
          </span>
        </Button>

    </div>

  )
}
