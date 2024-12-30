import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const projects = [
  { id: 1, title: "E-commerce Platform", status: "Completed", date: "2023-05-15" },
  { id: 2, title: "Mobile App", status: "In Progress", date: "2023-06-01" },
  { id: 3, title: "Web Redesign", status: "Planned", date: "2023-07-01" },
]

export default function ProjectsIndex() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-400">Projects</h1>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <Link href="/admin/projects/create">Create New Project</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-300">Title</TableHead>
            <TableHead className="text-gray-300">Status</TableHead>
            <TableHead className="text-gray-300">Date</TableHead>
            <TableHead className="text-gray-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} className="border-gray-700">
              <TableCell className="text-gray-300">{project.title}</TableCell>
              <TableCell className="text-gray-300">{project.status}</TableCell>
              <TableCell className="text-gray-300">{project.date}</TableCell>
              <TableCell>
                <Button asChild variant="outline" size="sm" className="mr-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href={`/admin/projects/${project.id}/edit`}>Edit</Link>
                </Button>
                <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

