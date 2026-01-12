export default function Testimonials() {
  const testimonials = [
    { name: "Alice", text: "这个产品让我的工作效率翻倍！" },
    { name: "Bob", text: "界面漂亮，操作流畅，非常推荐。" },
    { name: "Cathy", text: "客户满意度大幅提升，值得投资。" },
  ]

  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">用户评价</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 border rounded-xl shadow-sm">
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
