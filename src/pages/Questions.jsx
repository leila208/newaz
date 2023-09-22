import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
function Questions() {
  const data = {
    rows: [
      {
        title: " Bizim hansı xidmətlərimiz var?",
        content: `•Neft və qaz kəşfiyyatı xidmətləri
         •Geoloji kəşfiyyat və tədqiqat
         •Dağ-mədən tədqiqatları
         •Ətraf mühitin və təhlükənin qiymətləndirilməsi, xüsusilə kimyəvi çirklənmə, tullantı anbarlarında riskin qiymətləndirilməsi, LNAPL çirklənməsinin sərhədlərinin müəyyən edilməsi və sürüşmələrin, çuxurların və s. və təhlükənin qiymətləndirilməsi
         •Tunel və bənd və s. infrastrukturlar
         •Qrunt sualrının kəşfiyyatı
         •Geofiziki xidmətlər (seysmik tədqiqat, maqnit tədqiqatı, qravitasiya tədqiqatı müqaviməti, induksiya edilmiş qütbləşmə və spektral səbəbli qütbləşmə tədqiqatları`,
      },
      {
        title: "Artıq illərdiki öz kefyiyyəti ilə fəaliyyət göstərən AzGP istər ölkədaxili istərsə də ölkəxarici fəaliyyətləri ilə xidmətinizdədir.",
        content:
          "Artıq illərdiki öz kefyiyyəti ilə fəaliyyət göstərən AzGP istər ölkədaxili istərsə də ölkəxarici fəaliyyətləri ilə xidmətinizdədir.",
      }
    ],
  };
  return (
    <section>
      <div className="k">
        <p>Suallar</p>
      </div>
      <div className="container">
          <div>
            <Faq data={data} />
          </div>
      </div>
    </section>
  );
}
export default Questions;
