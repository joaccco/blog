import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CreatePost() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Create New Post</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-gray-300">Title</Label>
          <Input id="title" placeholder="Enter post title" className="bg-gray-800 border-gray-700 text-white" />
        </div>
        <div>
          <Label htmlFor="content" className="text-gray-300">Content</Label>
          <Textarea id="content" placeholder="Enter post content" rows={10} className="bg-gray-800 border-gray-700 text-white" />
        </div>
        <div>
          <Label htmlFor="status" className="text-gray-300">Status</Label>
          <select id="status" className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Create Post</Button>
      </form>
    </div>
  )
}

