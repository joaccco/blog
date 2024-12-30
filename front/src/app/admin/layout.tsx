import Link from 'next/link'
import { LayoutDashboard, FileText, Briefcase, Settings, Bell, Search, User2, ChevronDown, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-[#14132C]">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1C1B36]/50 backdrop-blur-xl border-r border-white/5">
                <div className="p-6">
                    <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                            Admin
                        </div>
                    </div>
                </div>

                <nav className="px-3 py-4">
                    <div className="space-y-2">
                        {/* Dashboard */}
                        <Link
                            href="/admin"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <LayoutDashboard className="h-5 w-5" />
                            <span>Dashboard</span>
                        </Link>

                        {/* Posts */}
                        <Link
                            href="/admin/posts"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <FileText className="h-5 w-5" />
                            <span>Posts</span>
                        </Link>

                        {/* Projects */}
                        <Link
                            href="/admin/projects"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Briefcase className="h-5 w-5" />
                            <span>Projects</span>
                        </Link>

                        {/* Settings */}
                        <Link
                            href="/admin/settings"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Settings className="h-5 w-5" />
                            <span>Settings</span>
                        </Link>
                    </div>

                    {/* Theme Toggle */}
                    <div className="absolute bottom-8 left-0 right-0 px-6">
                        <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/5 text-gray-400">
                            <Moon className="h-5 w-5" />
                            <span>Dark Mode</span>
                            <div className="ml-auto">
                                <div className="w-10 h-5 bg-purple-500/20 rounded-full p-1">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>

            <div className="flex-1">
                {/* Top Navigation */}
                <div className="border-b border-white/5 bg-[#1C1B36]/50 backdrop-blur-xl">
                    <div className="flex items-center justify-between h-16 px-6">
                        <div className="relative w-96">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="bg-white/5 border-white/5 pl-10 text-gray-300 placeholder:text-gray-500 focus:border-purple-500"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
                            </Button>
                            <Button variant="ghost" className="text-gray-400 hover:text-white">
                                <User2 className="h-5 w-5 mr-2" />
                                <span>Profile</span>
                                <ChevronDown className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

