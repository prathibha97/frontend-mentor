// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ProductPreview from 'src/components/ProductPreview/ProductPreview';
import styles from './app.module.css'

export function App() {
  return (
    <>
      <h1 className={styles.heading}>Frontend Challenges</h1>
      <ProductPreview/>
      <div />
    </>
  );
}

export default App;
