import { useState } from "react"
import Modal from "./Modal"
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'title', headerName: "Book Title", flex: 1 },
    { field: 'author', headerName: "Book Author", flex: 1 },
    { field: 'genre', headerName: "Genre", flex: 1 },
    { field: 'series', headerName: "Series", flex: 1 },
    { field: 'isbn', headerName: "ISBN Number", flex: 1 },
]

function DataTable() {
    let [open, setOpen] = useState(false);
    const { bookData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection Model: ${selectionModel}`);
        setTimeout(() => { window.location.reload() }, 500)
    }

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className={`flex flex-col items-center ${open ? 'filter blur-sm pointer-events-none' : ''}`}>
                <div className="flex items-center justify-center mt-5">
                    <button
                        className="text-zinc-800 text-center bg-sky-100 shadow-md p-3 m-5 rounded-2xl font-normal text-md hover:bg-stone-200 hover:opacity-80 hover:text-stone-900 w-48"
                        onClick={() => handleOpen()}
                    >
                        Add
                    </button>
                    <button onClick={handleOpen} className="text-zinc-800 text-center bg-sky-100 shadow-md p-3 m-5 rounded-2xl font-normal text-md hover:bg-stone-200 hover:opacity-80 hover:text-stone-900 w-48">Update</button>
                    <button onClick={deleteData} className="text-zinc-800 text-center bg-sky-100 shadow-md p-3 m-5 rounded-2xl font-normal text-md hover:bg-stone-200 hover:opacity-80 hover:text-stone-900 w-48">Delete</button>
                </div>
                <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                    style={{ height: 550, width: '60%' }}
                >
                    <h2 className="p-3 bg-stone-200 mb-4 rounded text-center text-zinc-950 font-medium">Available Books</h2>
                    <DataGrid rows={bookData} columns={columns} rowsPerPageOptions={[5]}
                        checkboxSelection={true}
                        onSelectionModelChange={(item: any) => {
                            setSelectionModel(item)
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default DataTable
