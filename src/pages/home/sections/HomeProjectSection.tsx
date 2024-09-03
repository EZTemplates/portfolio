
export default function HomeProjectSection() {
    return (
        <>
            <div data-theme="dim">
                <div className="container m-auto flex flex-col p-5">
                    <div className="flex flex-row justify-between">
                        <span className="text-3xl lg:text-5xl text-white mb-5">Projects</span>
                        <span className="btn btn-outline btn-secondary">See All</span>
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-3">
                        <div className="card bg-base-100 w-80 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
