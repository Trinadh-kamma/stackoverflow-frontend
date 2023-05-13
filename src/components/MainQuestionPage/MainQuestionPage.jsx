import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./MainQuestionPage.css"

const MainQuestionPage = () => {

  const data =[
    {
      _id:1,
      upVotes:9,
      downVotes:3,
      noOfAnswers:1,
      views:3,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "azure-activity-directory", "nestjs", "angular"],
      userPosted:'lion',
      userId:1,
      askedOn:"jan 1",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "ram",
        answeredOn : "jan 2",
        userId:4,
      }]
    },
    {
      _id:2,
      upVotes:20,
      downVotes:3,
      noOfAnswers:2,
      views:4,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "azure-activity-directory", "nestjs", "angular"],
      userPosted:'leo',
      userId:2,
      askedOn:"jan 10",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "amar",
        answeredOn : "jan 20",
        userId:2,
      }]
    },
    {
      _id:3,
      upVotes:19,
      downVotes:3,
      noOfAnswers:8,
      views:2,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "azure-activity-directory", "nestjs", "angular"],
      userPosted:'lion',
      userId:3,
      askedOn:"jan 12",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "steve",
        answeredOn : "jan 18",
        userId:1,
      }]
    },
    {
      _id:4,
      upVotes:18,
      downVotes:0,
      noOfAnswers:16,
      views:5,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "azure-activity-directory", "nestjs", "angular"],
      userPosted:'lion',
      userId:1,
      askedOn:"jan 14",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "kevin",
        answeredOn : "jan 22",
        userId:6,
      }]
    },
    {
      _id:5,
      upVotes:29,
      downVotes:3,
      noOfAnswers:21,
      views:13,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "azure-activity-directory", "nestjs", "angular"],
      userPosted:'lion',
      userId:5,
      askedOn:"jan 18",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "ramss",
        answeredOn : "jan 28",
        userId:5,
      }]
    },
    {
      _id:6,
      upVotes:19,
      downVotes:1,
      noOfAnswers:10,
      views:30,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "azure-activity-directory", "nestjs", "angular"],
      userPosted:'lion',
      userId:6,
      askedOn:"jan 14",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "kumar",
        answeredOn : "jan 20",
        userId:3,
      }]
    }  
  ]

  const user = 123;
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate('/Auth')
    }
    else {
      navigate('/askquestion')
    }
  }
  return (
    <>
      <div className="questions__container">
        
        <div className="questions__container-sub">
          {
            location.pathname === "/" ? 
            (<h1>Top Questions</h1>) : (<h1>All Questions</h1>)
          }
          <button 
          onClick={checkAuth}
          className="question-button">Ask Question</button>
        </div>

        <div className="categories">
            <button>Interesting</button>
            <button>Bountied</button>
            <button>Hot</button>
            <button>Week</button>
            <button>Month</button>
        </div>

        <div className="main__questions-container">
          {data.map((eachQuestion) => (
            <div  className="each-question" key={eachQuestion._id}>
              <div className="each-question-info">
                <p>{`${eachQuestion.upVotes} votes`}</p>
                <p className="answer">{`${eachQuestion.noOfAnswers}`} {eachQuestion.noOfAnswers === 1 ? "answer" : "answers"}</p>
                <p>{`${eachQuestion.views} views`}</p>
              </div>

              <div  className="each-question-content">
                <Link  to={`/questions/${eachQuestion._id}`}>
                  <h1>
                    {eachQuestion.questionTitle}
                  </h1>
                </Link>
                <div className="tags">
                  {eachQuestion.questionTags.map((eachTag, index) => (
                    <button key={index}>{eachTag}</button>
                  ))}
                </div>
                <div className="time">
                  {eachQuestion.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>    
  )
}

export default MainQuestionPage
