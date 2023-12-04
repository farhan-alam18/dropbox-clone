"use client"

import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
    <div className="flex flex-col space-y-5 pb-10">
      <Button
      variant={"outline"}
        onClick={() => {
          setSort(sort === "desc" ? "asc" : "desc");
        }}
        className="ml-auto w-fit"
      >
        Sort By {sort === "desc" ? "Newest" : "Oldest"}
      </Button>

      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}

export default TableWrapper;
