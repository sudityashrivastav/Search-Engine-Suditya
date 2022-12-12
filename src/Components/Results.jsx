import "../Style/Results.css";
import { useState } from "react";
import Loading from "./Loading.jsx";

const Results = (mainData) => {
let {loading} = mainData.data.mainData;
let {data} = mainData.data.mainData;
console.log(loading);
  console.log(data);
//console.log(mainData.data.mainData);


//const data = "";
  return (<> {loading ? (<Loading/>) : 
    (<div className="resultContainer">    
      {data.search_information &&
        <h6>About {data.search_information.total_results} results ({data.search_information.time_taken_displayed
          } seconds)</h6>
      }
      {
        data.answer_box &&
        <div className="resultCard">
          <h4>Ok</h4>   
     <p className="disc">Exclamation: {data.answer_box.answers[0].source.date}</p>
          <h4>Source</h4>


        </div>
        
      }

      {/* Question answer session
        data.related_questions &&
        <div className="relatedSearches" style={{ marginTop: "5px" }}>
          <h4>People also ask</h4>
          <div className="questionContainer">
            {data.related_questions.map((elemQuery, key) => {
          console.log(key)
              return (<div key={key} className="relatedQuery quesAns" onClick={ques} >

                <div className="question">{elemQuery.question}</div>
                <div className={`answer ${isActive ? "anshow" : ""}`}>{elemQuery.answer}</div>

              </div>
              )
            })}
          </div>
        </div> */
      }





      {data.organic_results &&
    data.organic_results.map((elem, key) => (
          <div key={key} className="resultCard">
            <a href={elem.link} target="_blank">
              <div className="url">{elem.displayed_link.slice(0, 42)}</div>
              <div className="title">{elem.title}</div>
            </a>
            <div className="disc">{elem.snippet}</div>
            <div className="sitelinks">{elem.sitelinks && elem.sitelinks.inline.map((siteElem, keyTwo) => (<div key={keyTwo}>
              <hr/>
              <a href={siteElem.link}>{siteElem.title}</a>
            </div>
            ))}
            </div>
          </div>
        ))
      }
      {
        data.related_searches &&
        <div className="relatedSearches">
          <h4>Related searches</h4>
          <div className="queryContainer">
            {data.related_searches.map((elemQuery, keyThree) => (
              <div className="relatedQuery" key={keyThree}>{elemQuery.query.charAt(0).toUpperCase() + elemQuery.query.slice(1)}</div>
            ))}
          </div>
        </div>
      }
    </div>)}
  </>)
}
export default Results;