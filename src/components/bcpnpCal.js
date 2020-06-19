import React, { Component } from "react";
// import {Select}  from 'antd';
// let {Option}= Select;

class Bcpnpcalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      questionsAdd: [],
      isDisabled: false,
      parameters: [
        {
          type: "Skill Level And B.C Job Offer",
          quesAndAns: [
            {
              id: 1,
              question:
                "Do you have a job offer from an employer in British Columbia?",
              answer: [
                { answerOption: "Yes", points: 0 },
                { answerOption: "No", points: 0 },
              ],
            },
            {
              id: 2,
              question: "Skill Level of the B.C. Job Offer?",
              answer: [
                { answerOption: "NOC 0", points: 15 },
                { answerOption: "NOC A", points: 25 },
                { answerOption: "NOC B", points: 10 },
                { answerOption: "NOC C", points: 5 },
                { answerOption: "NOC D", points: 5 },
              ],
            },
            {
              id: 3,
              question: "Are you currently working in this job?",
              answer: [
                { answerOption: "Yes", points: 10 },
                { answerOption: "No", points: 0 },
              ],
            },
          ],
        },
        {
          type: "Annual wage of the B.C. job offer",
          quesAndAns: [
            {
              id: 4,
              question: " Annual gross wage of the job offer(CAD) $ ?",
              answer: [
                { answerOption: "$100,000 and above", points: 50 },
                { answerOption: "$97,500 to $99,999", points: 38 },
                { answerOption: "$95,000 to $97,499", points: 37 },
                { answerOption: "$92,500 to $94,999", points: 36 },
                { answerOption: "$90,000 to $92,499", points: 35 },
                { answerOption: "$87,500 to $89,999", points: 34 },
                { answerOption: "$85,000 to $87,499", points: 33 },
                { answerOption: "$82,500 to $84,999", points: 32 },
                { answerOption: "$80,000 to $82,499", points: 31 },
                { answerOption: "$77,500 to $79,999", points: 30 },
                { answerOption: "$75,000 to $77,499", points: 29 },
                { answerOption: "$72,500 to $74,999", points: 28 },
                { answerOption: "$70,000 to $72,499", points: 27 },
                { answerOption: "$67,500 to $69,999", points: 26 },
                { answerOption: "$65,000 to $67,499", points: 25 },
                { answerOption: "$62,500 to $64,999", points: 24 },
                { answerOption: "$60,000 to $62,499", points: 23 },
                { answerOption: "$57,500 to $59,999", points: 22 },
                { answerOption: "$55,000 to $57,499", points: 21 },
                { answerOption: "$52,500 to $54,999", points: 20 },
                { answerOption: "$50,000 to $52,499", points: 19 },
                { answerOption: "$47,500 to $49,999", points: 18 },
                { answerOption: "$45,000 to $47,499", points: 17 },
                { answerOption: "$42,500 to $44,999", points: 16 },
                { answerOption: "$40,000 to $42,499", points: 15 },
                { answerOption: "$38,750 to $39,999", points: 14 },
                { answerOption: "$37,500 to $38,749", points: 13 },
                { answerOption: "$36,250 to $37,499", points: 12 },
                { answerOption: "$35,000 to $36,249", points: 11 },
                { answerOption: "$33,750 to $34,999", points: 10 },
                { answerOption: "$32,500 to $33,749", points: 9 },
                { answerOption: "$31,250 to $32,499", points: 8 },
                { answerOption: "$30,000 to $31,249", points: 7 },
                { answerOption: "$28,750 to $29,999", points: 6 },
                { answerOption: "$27,500 to $28,749", points: 5 },
                { answerOption: "$26,250 to $27,499", points: 4 },
                { answerOption: "$25,000 to $26,249", points: 3 },
                { answerOption: "Less than $25,000", points: 0 },
              ],
            },
          ],
        },
        {
          type: "Regional District of Employment points are",
          quesAndAns: [
            {
              id: 5,
              question:
                "In what region of British Columbia is this job located?",
              answer: [
                {
                  answerOption:
                    "Stikine, Central Coast, Northern Rockies, Mount Waddington, Skeena-QueenCharlotte, Powell River, Sunshine Coast, Kootenay-Boundary, AlberniClayoquot",
                  points: 10,
                },
                {
                  answerOption:
                    "Kitimat-Stikine, Bulkley-Nechako, Squamish-Lillooet, Strathcona, ColumbiaShuswap,East Kootenay",
                  points: 8,
                },
                {
                  answerOption:
                    "Peace River, Comox Valley, Cariboo, Central Kootenay",
                  points: 6,
                },
                {
                  answerOption:
                    "Okanagan-Similkameen, Cowichan Valley, North Okanagan, Fraser-Fort George",
                  points: 4,
                },
                {
                  answerOption: "Thompson-Nicola, Nanaimo, Central Okanagan",
                  points: 2,
                },
                { answerOption: "Capital Fraser Valley", points: 2 },
                { answerOption: "Greater Vancouver", points: 0 },
              ],
            },
          ],
        },

        {
          type: "Directly related work experience points",
          quesAndAns: [
            {
              id: 6,
              question:
                "How many years of related (with respect to your job offer) work experience do you have in the last 10 years?",
              answer: [
                { answerOption: "5+ years", points: 15 },
                { answerOption: "4 to 5 years", points: 12 },
                { answerOption: "3 to 4 years", points: 9 },
                { answerOption: "2 to 3 years", points: 6 },
                { answerOption: "1 to 2 years", points: 3 },
                { answerOption: "Less than 1 year", points: 1 },
                { answerOption: "None", points: 0 },
              ],
            },
            {
              id: 7,
              question:
                "At Least 1 year of directly related experience in Canada?",
              answer: [
                { answerOption: "Yes", points: 10 },
                { answerOption: "No", points: 0 },
              ],
            },
          ],
        },
        {
          type: "Highest Level of Education Points",
          quesAndAns: [
            {
              id: 8,
              question: "8. What is your highest level of completed education?",
              answer: [
                { answerOption: "Master’s or Doctorate/PhD", points: 17 },
                {
                  answerOption: "Postgraduate Certificate or Diploma*",
                  points: 11,
                },
                { answerOption: "Bachelor’s Degree", points: 11 },
                { answerOption: "Diploma/Certificate (Trades)", points: 11 },
                { answerOption: "Associate Degree", points: 4 },
                { answerOption: "Diploma/Certificate (Non-trades)", points: 2 },
                {
                  answerOption: "Secondary School (High School) or Less",
                  points: 0,
                },
              ],
            },
            {
              id: 9,
              question: "Post-secondary education completed in B.C?",
              answer: [
                { answerOption: "Yes", points: 8 },
                { answerOption: "No", points: 0 },
              ],
            },
            {
              id: 10,
              question:
                "10. Post- Secondary education completed in Canada (outside B.C)?",
              answer: [
                { answerOption: "Yes", points: 6 },
                { answerOption: "No", points: 0 },
              ],
            },
            {
              id: 11,
              question:
                "11. Do you have Education Credential Assessment from qualified supplied?",
              answer: [
                { answerOption: "Yes", points: 4 },
                { answerOption: "No", points: 0 },
              ],
            },
            {
              id: 12,
              question:
                "12. Do you have trades certifiate assessment from the industry Training Authority?",
              answer: [
                { answerOption: "Yes", points: 4 },
                { answerOption: "No", points: 0 },
              ],
            },
          ],
        },
        {
          type: "Language Points",
          quesAndAns: [
            {
              id: 13,
              question: " What is your highest level of completed education?",
              answer: [
                { answerOption: "CLB 10 Advanced", points: 30 },
                { answerOption: "CLB 9 Initial Advanced", points: 26 },
                { answerOption: "CLB 8 Fluent Intermedate", points: 22 },
                { answerOption: "CLB 7 Adequate Intermediate", points: 18 },
                { answerOption: "CLB 6 Developing Intermediate", points: 14 },
                { answerOption: "CLB 5 Initial Intermediate", points: 10 },
                { answerOption: "CLB 4 High Basic", points: 6 },
                { answerOption: "CLB 4 Less than high Basic", points: 0 },
                { answerOption: "CLB No test", points: 0 },
              ],
            },
          ],
        },
      ],
    };
  }

  handleCalculator = (e, question) => {
    let value = e.target.value;
    console.log(question);
    if(value.toLowerCase()==="no"){

      this.setState({
        isDisabled: true,

      })
      for(let i=2; i<=5; i++){
        document.getElementById(i+"_question").value="Please Select";
      }
     

    }else if(value.toLowerCase()==="yes"){
      this.setState({
        isDisabled: false
      })
    }
    let { questionsAdd } = this.state;
    let obj = {
      question: question.question,
      value: (value.toLowerCase()==="no" || value.toLowerCase()==="yes")?0: parseInt(value),
      id: question.id,
    };
    let getFiltered = null;
    if (questionsAdd.length > 0) {
     
      if(value.toLowerCase()==="no"){
        console.log(questionsAdd);
        getFiltered = questionsAdd.filter((ele) => 
         ele.id !== 2 && ele.id !==3 && ele.id !==4 && ele.id !==5 && ele.id !== question.id
        );
        console.log(getFiltered);
      }else{
        getFiltered = questionsAdd.filter((ele) => ele.id !== question.id);
      }

    
      let allQuest = [...getFiltered, obj];
      this.setState({
        questionsAdd: allQuest,
        total: allQuest.reduce((acc, curr) => acc + curr.value, 0),
      });
    } else {
      this.setState({
        questionsAdd: [...this.state.questionsAdd, obj],
        total: obj.value,
      });
    }
  };

  render() {
    let { parameters, total, isDisabled } = this.state;
    // console.log(total);
    // console.log(questionsAdd);
    return (
      <div>
        <h4 style={{position: "fixed"}}>Your Score: <span className="text-info">{total}</span></h4>
      {isDisabled? <div className="text-danger">*Questions related with Bristish colombia will be disabled as you selected no</div>: null}
        {parameters.map((ele, key) => {
          return (
            <div key={key}>
              <h5 >{ele.type}</h5>
              {ele.quesAndAns.map((q, key1) => {
               
       
                return (
                  <section>
                  <div key={key1}  className="col-md-12 d-flex mb-3">
                    <div className="col-md-8 text-right"> {q.question} </div>
                    <select className="col-md-4" id={q.id+"_question"}  onChange={(e) => this.handleCalculator(e, q)}  disabled={ (isDisabled && (q.id=== 4|| q.id=== 5 || q.id===2 || q.id===3))? isDisabled: false} >
                      <option default>Please Select</option>
                      {q.answer.map((a, key2) => {
                   
                        return (
                          <option key={key2} value={(q.id !== 1)? a.points: a.answerOption}>
                            {a.answerOption}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  </section>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Bcpnpcalculator;
