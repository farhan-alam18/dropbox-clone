"use client";

import { FileIcon, defaultStyles } from "react-file-icon";
import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { COLOR_EXTENSION_MAP } from "@/constant";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey:"size",
    header:"Size",
    cell: ({ renderValue, ...props }) => {
      const timestampValue = renderValue() as number | null;

      if (timestampValue !== null && isFinite(timestampValue)) {
        return <span>{prettyBytes(timestampValue)}</span>;
      }

      // Return some default value or an empty span if timestamp is null or not a finite number
      return <span>N/A</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      return(
      <a
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        Download
      </a>
      )
    },
  },
];
