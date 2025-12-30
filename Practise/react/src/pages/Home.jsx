import React, { lazy, Suspense } from 'react'

function Home() {

  const SecoundCard = lazy(() => import("./SecoundCard"));
  return (
    <>
    <div class='row'>
<div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<Suspense fallback={<h4>Loading...</h4>}>
<SecoundCard/>
</Suspense>

{/* <div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card Pic</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
    </div>
    </>
  )
}

export default Home