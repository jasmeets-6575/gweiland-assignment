import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen text-white">
      <h1 className="text-center pt-32 text-5xl font-semibold tracking-wide ">
        Thirdweb Deploy - Custom Staking Contract
      </h1>

      <div className=" flex justify-between mt-20">
        <Link
          to={"/mint"}
          className="flex justify-around items-center w-[46%] h-auto border border-[#92bfff] rounded-lg p-3 "
        >
          <div>
            <img
              src="/icons/drop.webp"
              alt="drop"
              className="w-[80px] h-[80px] "
            />
          </div>
          <div className="w-[70%]">
            <h2 className=" text-3xl tracking-wide font-semibold pb-[8px]">
              Mint a new NFT
            </h2>
            <p className="pb-2 text-lg">
              Use the NFT Drop Contract to claim an NFT from the collection.
            </p>
          </div>
        </Link>

        <Link
          to={"/stake"}
          className="flex justify-around items-center w-[46%] h-auto border border-[#92bfff] rounded-lg p-3"
        >
          <img
            src="/icons/token.webp"
            alt="drop"
            className="w-[90px] h-[90px] "
          />
          <div className="w-[70%]">
            <h2 className=" text-3xl tracking-wide font-semibold pb-[8px]">
              Stake Your NFTs
            </h2>
            <p className="pb-2 text-lg">
              Use the custom staking contract deployed via{" "}
              <b>thirdweb Deploy</b> to stake your NFTs, and earn tokens from
              the <b>Token</b> contract.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
