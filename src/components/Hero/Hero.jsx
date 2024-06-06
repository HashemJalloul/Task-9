/* eslint-disable no-dupe-else-if */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
    const [index, setIndex] = useState(0);
    // eslint-disable-next-line no-undef
    const [change, setChange] = useState(false);

    const [changeClass, setChangeClass] = useState(true);

    const [changeColor, setChangeColor] = useState(true)

    return (
        <>
            <section className={changeColor ? 'HJ-Section2' : 'HJ-Section'}>

                <div className={changeClass ? "HJ-Hero" : "HJ-Hero2"}>
                    <p>Now The Index Is: {index}</p>
                </div>

                <div className="HJ-section2">
                    <div>{index}</div>

                    <Button

                        className={change ? "HJ-btn2" : "HJ-btn"}

                        onClick={() => {
                            if (index < 10) {

                                setChangeClass(false);

                                setIndex(index + 1);

                            } else if (index == 10) {

                                setChangeClass(true);
                                setChangeColor(false)

                                setTimeout(() => {
                                    setChangeClass(false);
                                    setChangeColor(true)
                                    setIndex(index + 10);
                                }, 3000);

                            } else if (index > 10 && index < 100) {
                                setIndex(index + 10);

                            } else if (index == 100) {

                                setChangeClass(true);
                                setChangeColor(false)
                                setTimeout(() => {
                                    setChangeClass(false);
                                    setChangeColor(true)
                                    setIndex(index + 100);
                                }, 3000);
                            } else if (index >= 100 && index < 1000) {
                                setIndex(index + 100);

                            } else if (index == 1000) {
                                setChangeClass(true);
                                setChangeColor(false)
                                setTimeout(() => {
                                    setChangeColor(true)
                                    setChangeClass(false);
                                }, 3000);

                                setChange(true);

                                setChangeClass(true);
                            }

                            // eslint-disable-next-line no-empty
                            else {
                            }
                        }}
                        variant="primary"
                    >
                        Increment
                    </Button>
                    <Button
                        className={change ? "HJ-btn" : "HJ-btn2"}
                        onClick={() => {
                            if (index <= 10000 && index > 100) {
                                setIndex(index - 100);

                            } else if (index == 100) {
                                setChangeClass(true);
                                setChangeColor(false)
                                setTimeout(() => {
                                    setChangeClass(false);
                                    setChangeColor(true)
                                    setIndex(index - 10);
                                }, 3000);
                            } else if (index <= 100 && index > 10) {
                                setIndex(index - 10);

                            } else if (index == 10) {
                                setChangeClass(true);
                                setChangeColor(false)
                                setTimeout(() => {
                                    setChangeClass(false);
                                    setChangeColor(true)
                                    setIndex(index - 1);
                                }, 3000);
                            } else if (index <= 10 && index > 1) {
                                setIndex(index - 1);
                            }

                            // eslint-disable-next-line no-empty
                            else {
                            }
                        }}
                        variant="success"
                    >
                        Decrement
                    </Button>{" "}
                </div>
            </section>
        </>
    );
}
