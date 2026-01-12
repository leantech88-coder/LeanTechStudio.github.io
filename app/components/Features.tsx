export default function Features() {
  const features = [
    { title: "简单易用", desc: "无需编程经验即可使用", icon: "⚡" },
    { title: "响应式设计", desc: "在手机和电脑上都完美呈现", icon: "📱" },
    { title: "高性能", desc: "加载快，用户体验佳", icon: "🚀" },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">产品特点</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
