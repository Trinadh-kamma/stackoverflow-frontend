import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./QuestionDetails.css"
import RightSidebar from '../RightSidebar/RightSidebar';
import upVote from  "../../assets/arrow-up.png"
import downVote from  "../../assets/arrow-down.png"
import save from "../../assets/save.png";
import activity from "../../assets/restore.png"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuestionDetails = () => {
  const { id } = useParams();
  const questionsList =[
    {
      _id:'1',
      upVotes:9,
      downVotes:3,
      noOfAnswers:1,
      views:3,
      questionTitle:" React js onClick can't pass value to method",
      questionBody:"I want to read the onClick event value properties. But when I click on it, I see something like this on the console:",
      questionTags : ["javascript", "reactjs"],
      userPosted:'lion',
      userId:'1',
      askedOn:"jan 1",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "ram",
        answeredOn : "jan 2",
        userId:'4',
      }]
    },
    {
      _id:'2',
      upVotes:20,
      downVotes:3,
      noOfAnswers:2,
      views:4,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "nestjs", "angular", "azure-activity-directory"],
      userPosted:'leo',
      userId:'2',
      askedOn:"jan 10",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "amar",
        answeredOn : "jan 20",
        userId:'2',
      }]
    },
    {
      _id:'3',
      upVotes:19,
      downVotes:3,
      noOfAnswers:8,
      views:2,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "nestjs", "angular", "azure-activity-directory"],
      userPosted:'lion',
      userId:'3',
      askedOn:"jan 12",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "steve",
        answeredOn : "jan 18",
        userId:'1',
      }]
    },
    {
      _id:'4',
      upVotes:18,
      downVotes:0,
      noOfAnswers:16,
      views:5,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "nestjs", "angular", "azure-activity-directory"],
      userPosted:'lion',
      userId:'1',
      askedOn:"jan 14",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "kevin",
        answeredOn : "jan 22",
        userId:'6',
      }]
    },
    {
      _id:'5',
      upVotes:29,
      downVotes:3,
      noOfAnswers:21,
      views:13,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags :["azure", "nestjs", "angular", "azure-activity-directory"],
      userPosted:'lion',
      userId:'5',
      askedOn:"jan 18",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "ramss",
        answeredOn : "jan 28",
        userId:'5',
      }]
    },
    {
      _id:'6',
      upVotes:19,
      downVotes:1,
      noOfAnswers:10,
      views:30,
      questionTitle:"How to integrate Microsoft authentication and authorization in full stack web app?",
      questionBody:"I am creating a full-stack web application using Angular and Nest.js. I want to implement Microsoft authentication with delegated access for Angular so User can sign in using Microsoft",
      questionTags : ["azure", "nestjs", "angular", "azure-activity-directory"],
      userPosted:'lion',
      userId:'6',
      askedOn:"jan 14",
      time:"30 min ago",
      answers : [{
        answerBody : "Answer",
        userAnswered : "kumar",
        answeredOn : "jan 20",
        userId:'3',
      }]
    }  
  ]

  const modules = {
    toolbar : [
      ["bold", "italic", "underline", "blockquote", "code-block"],
      ["link", "image"],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }], [{ 'align': [] }],['clean'],
    ]
  }

  return (
    <>
      <div>
        {questionsList.filter((eachQuestion) => eachQuestion._id === id).map((question) => (
          <div className="title__container" key={question._id}>
            <h1 key={question._id} className="title">
              {question.questionTitle}
            </h1>
            <Link to="/askquestion" className="ask-question">Ask Question</Link>
          </div>
        ))}
      </div>
      

      <div className="main__body-container">
        <div className="answer-container">
          <div className="answer-container1">
            <div className="votes-container">
              <img src={upVote} alt="upVote" className="upvote"/>
              <p>0</p>
              <img src={downVote} alt="downVote" className="downvote"/>
              <img src={save} alt="save" className="save"/>
              <img src={activity} alt="activity" className="activity"/>
            </div>

            <div>
              {questionsList.filter((eachQuestion) => eachQuestion._id === id).map((question) => (
                <div className="main-body__container" key={question._id}>
                  <p key={question.id} className="question-body">{question.questionBody}</p>
                  <div className="tags-container">
                    {question.questionTags.map((eachTag) => (
                      <button className="tags" key={eachTag}>{eachTag}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="main__sef-container">
                <div className="sef-container">
                  <p>Share</p>
                  <p>Edit</p>
                  <p>Follow</p>
                </div>
                <div className="user-container">
                  <p>asked 42 mins ago</p>
                  <div className="posted__user-profile">
                    T
                  </div>
                </div>
              </div>
              <p className="comment">Add a comment...</p>
            </div>
          </div>
          <hr className="line"/>

          <div>
            <h2 className="total-answer">1 Answer</h2>
          <div className="answer-container1">
            <div className="votes-container">
              <img src={upVote} alt="upVote" className="upvote"/>
              <p>5</p>
              <img src={downVote} alt="downVote" className="downvote"/>
              <img src={save} alt="save" className="save"/>
              <img src={activity} alt="activity" className="activity"/>
            </div>

            <div>
              {questionsList.filter((eachQuestion) => eachQuestion._id === id).map((question) => (
                <div className="main-body__container" key={question._id}>
                  <p key={question.id} className="question-body">{question.questionBody}</p>
                  <div className="tags-container">
                    {question.questionTags.map((eachTag) => (
                      <button className="tags" key={eachTag}>{eachTag}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="main__sef-container">
                <div className="sef-container">
                  <p>Share</p>
                  <p>Edit</p>
                  <p>Follow</p>
                </div>
                <div className="user-container">
                  <p>asked 42 mins ago</p>
                  <div className="posted__user-profile">
                    T
                  </div>
                </div>
              </div>
              <p className="comment">Add a comment...</p>
            </div>
          </div>
          <hr className="line"/>
          </div>

          <div className="wrapper">
            <h2 className="answer2">Your Answer</h2>
            <ReactQuill className="quill1"
                required
                tabIndex="1"
                theme = "snow"
                modules={modules}
            />
          </div>

          <button className="post-answer">Post Your Answer</button>
          {questionsList.filter((eachQuestion) => id === eachQuestion._id).map((question) => (
            <p key={question.questionTags} className="others">Not the answer you're looking for? Browse other questions tagged {question.questionTags.map((tag) => (
              <button className="bottom-tags" key={tag}>{tag}</button>
            ))} or <Link to="/askQuestion" className="own-question">ask your own question.</Link></p>
          ))}
        </div>

        <RightSidebar/>
      </div>
    </>
  )
}

export default QuestionDetails
