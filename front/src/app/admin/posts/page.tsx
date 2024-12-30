import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const posts = [
    { id: 1, title: "First Post", status: "Published", date: "2023-06-01" },
    { id: 2, title: "Second Post", status: "Draft", date: "2023-06-05" },
    { id: 3, title: "Third Post", status: "Published", date: "2023-06-10" },
]

export default function PostsIndex() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-purple-400">Posts</h1>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/admin/posts/create">Create New Post</Link>
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
                    {posts.map((post) => (
                        <TableRow key={post.id} className="border-gray-700">
                            <TableCell className="text-gray-300">{post.title}</TableCell>
                            <TableCell className="text-gray-300">{post.status}</TableCell>
                            <TableCell className="text-gray-300">{post.date}</TableCell>
                            <TableCell>
                                <Button asChild variant="outline" size="sm" className="mr-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700">
                                    <Link href={`/admin/posts/${post.id}/edit`}>Edit</Link>
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

