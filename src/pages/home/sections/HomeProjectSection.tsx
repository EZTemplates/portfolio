
export default function HomeProjectSection() {
    return (
        <>
            <div data-theme="dim">
                <div className="container m-auto flex flex-col p-5">
                    <div className="flex flex-row justify-between">
                        <span className="text-3xl lg:text-5xl text-white mb-5">Projects</span>
                        <span className="btn btn-outline btn-secondary">See All</span>
                    </div>
                    <div className="overflow-x-auto whitespace-nowrap">
                        {
                            [1, 2, 3, 4, 5].map(() => (
                                <div className="card bg-base-100 w-80 shadow-xl inline-block p-4">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body border rounded-b-md">
                                        <h2 className="card-title">
                                            Shoes!
                                            <div className="badge badge-secondary">In Progress</div>
                                        </h2>
                                        <p className="whitespace-normal">This is a long piece of text that should be truncated to prevent overflow.</p>
                                        <div className="card-actions justify-start">
                                            <div className="badge badge-outline">Fashion</div>
                                            <div className="badge badge-outline">Products</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
