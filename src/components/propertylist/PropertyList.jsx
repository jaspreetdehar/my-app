import PropList from "./PropList";
import './property.css'
export default function PropertyList({ property }) {
    return (
        <>
            <div className="container">
                <div className="row g-4 p-3">
                    {property.map((p) => (
                        <PropList
                            key={p.id}
                            {...p}
                            // name={p.name}
                            // price={p.price}
                            // rating={p.rating}
                            // img={p.img}
                            // offprice={p.offprice}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}