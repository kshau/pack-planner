"use client"

import { Navigation } from "@/components/custom/Navigation"
import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { CirclePlus, SquarePen, Trash2 } from "lucide-react"
import { useSession } from "next-auth/react"

import axios from "axios"
import { useEffect, useState } from "react"
import { getTotalWeight } from "@/lib/weights"
import { useToast } from "@/components/ui/use-toast"
import { errorToast } from "@/lib/error-toast"
import { getTotalPrice } from "@/lib/prices"

export default function Packs() {

    const {data: session, status} = useSession();

    const [disabledPackCreation, setDisabledPackCreation] = useState(false);
    const [packs, setPacks] = useState([]);

    const { toast } = useToast();

    const createPack = () => {

        setDisabledPackCreation(true);

        axios.post("/api/createPack", 
            {}, 
            {withCookies: true}
        ).then(response => {
            const {packId} = response.data;
            location.href = `/packs/${packId}`;
        }).catch(err => {
            toast(errorToast);
            console.error(err);
        })

    }

    const getMyPacks = () => {

        axios.post("/api/getMyPacks", 
            {}, 
            {withCookies: true}
        ).then(response => {
            const {packs} = response.data;
            setPacks(packs);
        })
        .catch(err => {
            toast(errorToast);
            console.error(err);
        })

    }

    const deletePack = (packId) => {

        axios.post("/api/deletePack", 
            {packId}, 
            {withCookies: true}
        ).then(response => {
            getMyPacks();
        })
        .catch(err => {
            toast(errorToast);
            console.error(err);
        })

    }

    useEffect(() => {

        if (status === 'loading') {
            return;
        }

        if (!session) {
            location.href = "/";
        }

        getMyPacks();

    }, [session, status]);

    return (
        <Navigation current="Packs">
            <div className="p-5">
                <span className="text-4xl font-bold">
                    My Packs
                </span>
                <Table className="mt-5 w-[80rem]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pack Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Weight (lbs)</TableHead>
                            <TableHead className="w-1">Edit</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {packs.map(pack => (<TableRow>
                            <TableCell>
                                {pack.name}
                            </TableCell>
                            <TableCell>
                                ${getTotalPrice(pack.itemCategories)}
                            </TableCell>
                            <TableCell>
                                {getTotalWeight(pack.itemCategories)}
                            </TableCell>
                            <TableCell>
                                <Button className="flex gap-2" onClick={() => {location.href = `/packs/${pack.id}`}}>
                                    <SquarePen/>
                                    <span>
                                        Edit pack
                                    </span>
                                </Button>
                            </TableCell>
                            <TableCell>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className="flex gap-2" variant="destructive">
                                            <Trash2/>
                                            <span>
                                                Delete pack
                                            </span>
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure you want to delete this pack?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. "{pack.name}" will be permanently deleted and you will be unable to recover it.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => {deletePack(pack.id)}}>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
                <Button className="flex gap-2 mt-1" onClick={createPack} disabled={disabledPackCreation}>
                    <CirclePlus/>
                    <span>
                        Create pack
                    </span>
                </Button>
            </div>
        </Navigation>
      )

}