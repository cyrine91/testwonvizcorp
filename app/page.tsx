
import app from './app'




const port =5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});




export default function Home() {
  return (
    <main>
      Flexy 
    </main>
  );
}
