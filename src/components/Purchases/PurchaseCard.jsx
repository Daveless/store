import { formatDateDDMMYYYY } from "../../utils/date";

const PurchaseCard = ({ purchase }) => {
  return (
    <article className="grid grid-cols-2 items-center mt-2 gap-2">
      <section className="flex gap-2">
        <div className="h-[50px] sm:h-[80px] aspect-square">
          <img className="h-full w-full object-contain" loading="lazy" src={purchase?.product.images[0].url} alt="" />
        </div>
        <h4 className="text-sm text-center m-auto">{purchase?.product.title}</h4>
      </section>

      <section className="grid text-center text-sm gap-3 sm:grid-cols-3">
        <span className="text-gray-400">{formatDateDDMMYYYY(purchase?.createdAt)}</span>
        <div >
          <span className="p-2 border-[1px] border-gray-400">{purchase?.quantity}</span>
        </div>
        <h4 className="font-bold">${(purchase?.quantity*purchase?.product.price).toFixed(1)}</h4>

      </section>
    </article>
  );
};
export default PurchaseCard;
