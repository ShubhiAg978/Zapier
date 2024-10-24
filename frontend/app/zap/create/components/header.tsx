export default function Header() {
    
    return (
        <header className="fixed top-0 w-full shadow-lg">
            <div className="max-w-6xl ml-4 sm:px-6">
                <div className="flex items-center justify-between h-16"> 
                    <div className="shrink-0 flex items-center">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                            My Zaps
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
