import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja Liist | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Phasellus porta augue ac rutrum varius. Sed ac tincidunt urna. Curabitur elit velit, consectetur id nisl rhoncus, luctus rutrum massa. Pellentesque tempus sem fermentum ipsum euismod efficitur. Integer tempus eget odio vehicula placerat. Proin leo urna, iaculis at elementum nec, tristique at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in elementum ligula. Phasellus placerat finibus nisl, dignissim blandit nibh consectetur nec.</p>
        <p className={styles.text}>Phasellus porta augue ac rutrum varius. Sed ac tincidunt urna. Curabitur elit velit, consectetur id nisl rhoncus, luctus rutrum massa. Pellentesque tempus sem fermentum ipsum euismod efficitur. Integer tempus eget odio vehicula placerat. Proin leo urna, iaculis at elementum nec, tristique at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in elementum ligula. Phasellus placerat finibus nisl, dignissim blandit nibh consectetur nec.</p>

        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
    
  )
}
