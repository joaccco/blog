import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CreateProject() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Create New Project</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-gray-300">Title</Label>
          <Input id="title" placeholder="Enter project title" className="bg-gray-800 border-gray-700 text-white" />
        </div>
        <div>
          <Label htmlFor="description" className="text-gray-300">Description</Label>
          <Textarea id="description" placeholder="Enter project description" rows={5} className="bg-gray-800 border-gray-700 text-white" />
        </div>
        <div>
          <Label htmlFor="status" className="text-gray-300">Status</Label>
          <select id="status" className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white">
            <option value="planned">Planned</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <Label htmlFor="date" className="text-gray-300">Start Date</Label>
          <Input id="date" type="date" className="bg-gray-800 border-gray-700 text-white" />
        </div>
        <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Create Project</Button>
      </form>
    </div>
  )
}

