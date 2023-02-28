import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import Tab from "../components/Tab.js"
import { EnhanceAI } from 'enhanceai';

export default function Home() {
  const [content, setContent] = useState("");
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
              <EnhanceAI>
                  <textarea
                      placeholder="Type anything..."
                      className={styles.notepad}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      spellCheck="false"
                  ></textarea>
              </EnhanceAI>
              <p>Built by eefh1 on Replit for ClayPascal</p>
          </div>
      </div>
  );
}
