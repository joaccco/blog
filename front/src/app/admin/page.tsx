import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, ArrowUpRight, CreditCard } from 'lucide-react'

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Balance Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-0 shadow-xl">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-gray-400">Total Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">$7,610.00</div>
                        <div className="mt-4 flex items-center space-x-2 text-sm">
                            <span className="flex items-center text-green-400">
                                <ArrowUpRight className="h-4 w-4 mr-1" />
                                +2.5%
                            </span>
                            <span className="text-gray-400">from last month</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-0 shadow-xl">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-gray-400">Credit Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold text-white">****3208</div>
                            <CreditCard className="h-8 w-8 text-purple-400" />
                        </div>
                        <div className="mt-4 flex items-center space-x-2 text-sm">
                            <span className="flex items-center text-red-400">
                                <ArrowDownRight className="h-4 w-4 mr-1" />
                                -4.2%
                            </span>
                            <span className="text-gray-400">spending rate</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Transfer Section */}
            <Card className="bg-[#1C1B36] border-gray-800">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-400">Pay to</label>
                            <Input
                                value="f3a24b64d2c285e6494567fe887728d5"
                                className="mt-1 bg-gray-900 border-gray-700 text-gray-300"
                                readOnly
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-gray-400">Amount</label>
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    className="mt-1 bg-gray-900 border-gray-700 text-gray-300"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Reason</label>
                                <select className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 text-gray-300">
                                    <option>Pay games</option>
                                    <option>Services</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                            Send
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Information Card */}
            <Card className="bg-[#1C1B36] border-gray-800">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold text-white">Information</CardTitle>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Location:</span>
                            <span className="text-white">Lima</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Address:</span>
                            <span className="text-white">Peru</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-400">Wallet ID:</span>
                            <span className="text-white text-sm">4d5cc285e6494567fe887728bb6f4c24b</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

