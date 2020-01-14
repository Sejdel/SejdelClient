import React from 'react';
import './StaticPage.css';

function StaticPage() {

  let state = { apiResponse: "a" };

  return (
    <div className="content">
      <h1 class="lemma">&ldquo; Sejdelsöndag &rdquo;</h1>
      <h3 class="phonetic">|sej`delsön´dag|</h3>

      <p>Sammansättning av <span class="reference">sejdel</span> och <span class="reference">söndag</span>, en mötesplats för unga studenter och handelsresande. Äger traditionellt sett rum varje söndag klockan 19:00 (GMT+1) hemma hos Gräkan med ett fåtal undantag. Öl samt andra former av alkohol inmundigas i mängder.</p>
    </div>
  );
}

export default StaticPage;
