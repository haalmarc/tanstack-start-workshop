interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function AddCafeForm({ onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto my-5 p-5 border border-gray-300 rounded-lg bg-gray-50"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-2 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block mb-1 font-bold">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          className="w-full px-2 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block mb-1 font-bold">
          Rating:
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          step="0.1"
          required
          className="w-full px-2 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 border-none rounded cursor-pointer text-base hover:bg-blue-700 transition-colors"
      >
        Add Cafe
      </button>
    </form>
  );
}
