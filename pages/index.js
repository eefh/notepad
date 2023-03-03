import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from "react";
import Tab from "../components/Tab.js"
import { Cancel, Plus, Camera } from 'iconoir-react';
import Format from '../components/Format';

export default function Home() {
  const [content, setContent] = useState("");
  const [ add, toggleAdd ] = useState(false);
  const [ md, toggleMd ] = useState(false);
  const [ complete, setComplete ] = useState("");
  const [ title, setTitle ] = useState("");
  const inputRef = useRef(null);

  const handleAa = () => {
    toggleAdd(false);
    toggleMd(true);
  }

  const handleClick = () => {
    inputRef.current.focus();
  }

  const getCompletion = async () => {
    const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: content
        }),
    });
    const data = await response.json();
    setComplete(data.result);
    return data.result
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
        e.preventDefault();
        setContent(content + complete)
        e.target.innerText += complete
        setComplete("");
    }
  }

  const onInput = (e) => {
    setContent(e.target.innerText);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      // generate suggestions here
                  console.log(content);
        if (content) {
            getCompletion();
        } else {
            setComplete("");
        }

    }, 500);

    return () => clearTimeout(timer);
  }, [content]);

  function handleFontChange(fontFamily, fontSize, isBold) {
      document.execCommand("styleWithCSS", null, true);
      document.execCommand("fontName", false, fontFamily);
      document.execCommand("fontSize", false, fontSize);
      document.execCommand("bold", false, isBold);
  }

  const createTitle = () => {
    const maxLength = 28;
    let shortened = content.slice(0, maxLength)
    if (content.length > maxLength) {
        shortened += '...';
    }

    return shortened
  }

  return (
      <div>
          <Head>
              <script
                  type="module"
                  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
              ></script>
              <script
                  nomodule
                  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
              ></script>
          </Head>

          <div className={styles.container}>
            <div className={styles.title}>
                <h2>{createTitle()}</h2>
            </div>
              <div className={styles.notepad} onClick={handleClick}>
                  <div
                      className={styles.type}
                      contentEditable="true"
                      onInput={onInput}
                      onKeyDown={handleKeyDown}
                      ref={inputRef}
                  ></div>
                  {complete ? (
                      <span contentEditable="false" className={styles.complete}>
                          {" "}
                          {complete}
                      </span>
                  ) : null}
                  {!add && !md ? (
                      <div
                          className={styles.plus}
                          onClick={() => toggleAdd(true)}
                      >
                          <Plus></Plus>
                      </div>
                  ) : null}
                  {add ? (
                      <div className={styles.options}>
                          <div className={styles.button} onClick={handleAa}>
                              Aa
                          </div>
                          <div
                              className={styles.cancel}
                              onClick={() => toggleAdd(false)}
                          >
                              <Cancel></Cancel>
                          </div>
                      </div>
                  ) : null}
                  {md ? <Format handleFontChange={handleFontChange} toggleMd={toggleMd}></Format> : null}
              </div>
          </div>
      </div>
  );
}
