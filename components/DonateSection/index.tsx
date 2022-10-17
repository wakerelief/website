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
                        <h2 className="py-2">Help Make a Difference</h2>
                        <div className="pb-3 px-3 fs-5">
                            <p> Make checks payable to Christ Episcopal Church with Wake Relief in the memo line and mail to:</p>
                            <p className="fs-6">
                                Christ Episcopal Church <br />
                                120 East Edenton Street <br />
                                Raleigh, NC 27601
                            </p>
                            <p>You can also donate online by clicking the button below:</p>
                            <form name="PrePage" method="post" action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"> <input type="hidden" name="LinkId" value="9adb9bbd-730f-4c4f-9837-1055cc6ba263" /> <input type="image" src="//content.authorize.net/images/donate-gold.gif" /> </form>
                            <p className="pt-2" style={{fontSize: 14}}>For information on gifting stock or mutual funds, contact finance@ccral.org</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DonateSection;