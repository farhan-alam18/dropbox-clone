// "use client"

// import { useAppStore } from "@/store/store"
// import { useUser } from "@clerk/nextjs"
// import { useState } from "react"

// function RenameModal() {
//     const {user} = useUser()
//     const [input, setInput] = useState("")
//     const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] = 
//     useAppStore((state) => [
//         state.isRenameModalOpen,
//         state.setIsRenameModalOpen,
//         state.fileId,
//         state.filename
//     ])
//   return (
//          <Dialog
//       open={isRenameModalOpen}
//       onOpenChange={(isOpen) => {
//         setIsRenameModalOpen(isOpen);
//       }}
//     >
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Rename the File</DialogTitle>

//           <Input 
//           id="link"
//           defaultValue={filename}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDownCapture={(e) => {
//             if (e.key === "Enter"){
//                 renameFile()
//             }
//           }}
//           />
//           <div></div>
//         </DialogHeader>
//         <div className="flex space-x-4 py-3">
//           <Button
//             size="sm"
//             className="px-3 flex-1"
//             variant={"ghost"}
//             onClick={() => setIsDeleteModalOpen(false)}
//           >
//             <span className="sr-only">Cancel</span>
//             <span>Cancel</span>
//           </Button>
//           <Button
//             type="submit"
//             size="sm"
//             className="px-3 flex-1"
//             onClick={() => deleteFile()}
//           >
//             <span className="sr-only">Delete</span>
//             <span>Delete</span>
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default RenameModal