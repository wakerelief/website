import Image from "next/image";
import styles from "./donate-section.module.scss";
import donateImage from "../../media/volunteer4.jpg";
import { BiDonateHeart } from "react-icons/bi";

const DonateSection = () => {
    return (
        <>
            <div className={`${styles.donateContainer} container-fluid mt-5`}>
                <div className={`${styles.donateRow} row align-items-center`}>
                    <div className="col-md-6 px-0">
                        <div className={`${styles.imageWrapper} m-auto `}>
                            <Image src={donateImage} alt="Wake Relief Logo" layout="responsive" />
                        </div>
                    </div>
                    <div className={`${styles.donateDescription} col-md-6 text-center p-4`}>
                        <BiDonateHeart />
                        <h3 className="pt-2">Help Make a Difference</h3>
                        <div className="pb-3 px-3 fs-5">
                            <p className="mb-1"> Make checks payable to Christ Episcopal Church with Wake Relief in the memo line and mail to:</p>
                            <p className="fs-6 mb-1">
                                Christ Episcopal Church <br />
                                120 East Edenton Street <br />
                                Raleigh, NC 27601
                            </p>
                            {/* <p className="mb-1">You can also donate to Wake Relief online by clicking the button below:</p> */}
                            <p className="text-left d-inline-block mb-1">Interested in Memorial Giving? </p><a href="https://christchurchraleigh.wufoo.com/forms/wake-relief-donations"> visit this page!</a>
                            <p className="pt-2 mb-0" style={{fontSize: 14}}>For information on gifting stock or mutual funds, contact finance@ccral.org</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DonateSection;