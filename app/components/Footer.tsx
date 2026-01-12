export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <p className="mt-2 text-gray-400">隐私政策 | 服务条款</p>
    </footer>
  )
}
