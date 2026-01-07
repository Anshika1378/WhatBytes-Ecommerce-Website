export default function Filters() {
  return (
    <aside className="w-64 p-4 border-r">
      <h3 className="font-semibold mb-3">Category</h3>
      <div className="space-y-2 text-sm">
        <p>All</p>
        <p>Electronics</p>
        <p>Clothing</p>
        <p>Jewellery</p>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Price</h3>
      <input type="range" min="0" max="1000" />
    </aside>
  );
}
