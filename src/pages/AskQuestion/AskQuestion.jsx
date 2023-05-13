import React, {useState, useRef} from 'react'
import "./AskQuestion.css"
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import pencil from "../../assets/pencil.png"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AskQuestion = ({isMenu}) => {
  const [tagValue, setTagValue] = useState('');
  const [tags, setTags] = useState([])
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isBodyFocused, setIsBodyFocused] = useState(false);
  const [isDetailsFocused, setIsDetailsFocused] = useState(false);
  const [isTagFocused, setIsTagFocused] = useState(false);
  const [hasEnteredTags, setHasEnteredTags] = useState(false)


  const handleTagChange = (e) => {
    const inputVal = e.target.value.trim();
    setTagValue(inputVal);
    console.log(inputVal)
  }


  const reactQuillRef1 = useRef(null)
  const handleReactQuill1 = (value, editor, source) => {
    if (source === "user") {
      const text = reactQuillRef1.current.getEditor().getText()
      setValue1(text)
    }
  }


  const reactQuillRef2 = useRef(null)
  const handleReactQuill2 = (value, editor, source) => {
    if (source === "user") {
      const text = reactQuillRef2.current.getEditor().getText()
      setValue2(text)
    }
  }

  const handleKeyDown = (e) => {
    const {key} = e;
    if ((key === "Enter" || key === "," || key === " ") && tagValue.length) {
      e.preventDefault();
      setTags([...tags, tagValue])
      setHasEnteredTags(true)
      setTagValue("")
    }
    else if (key === "Backspace" && tags.length) {
      const tagsCopy = [...tags]
      const lastTag = tagsCopy.pop()
      setTags(tagsCopy)
      setTagValue(lastTag)
    }
  }

  const removeTags = (index) => {
    const latestTags = tags.filter((t, i) =>  i !== index)
    setTags(latestTags)
  }
  
  const tagInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const handleClick1 = () => {
    const nextDiv = document.querySelector('div[tabIndex="1"]');
    nextDiv.focus();
  } 

  const handleClick2 = () => {
    const nextDiv = document.querySelector('div[tabIndex="2"]');
    nextDiv.focus();
  }

  const handleClick3 = () => {
    tagInputRef.current.focus();
  }
  
  const handleTitleFocus = () => {
    setIsTitleFocused(true);
  }
  const handleTitleBlur = () => {
    setIsTitleFocused(false);
  }

  const handleBodyFocus = () => {
    setIsBodyFocused(true);
  }
  const handleBodyBlur = () => {
    setIsBodyFocused(false);
  }

  const handleDetailedFocus = () => {
    setIsDetailsFocused(true);
  }
  const handleDetailedBlur = () => {
    setIsDetailsFocused(false);
  }

  const handleTagFocus = () => {
    setIsTagFocused(true);
  }
  const handleTagBlur = () => {
    setIsTagFocused(false);
  }

  const modules = {
    toolbar : [
      [{header : [1,2,3]}],
      ["bold", "italic", "underline", "blockquote", "code-block"],
      ["link", "image"],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],     
      [{ 'direction': 'rtl' }],[{ 'align': [] }],['clean'],
    ]
  }

  let imge = "https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368";
  return (
    <form className="askQuestions__main-container" onSubmit={handleSubmit}>
      {isMenu ? (<SideNavbar/>) : null}

      <div className="askQuestions__info-container">
        <h1>Ask a public question</h1>
        <img src={imge} alt="img"/>
      </div>

      <div className="questions__details">
        <h1>Writing a good question</h1>
        <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
        <p>Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Add “tags” which help surface your question to members of the community.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>

      <div className="question__details-main-container" id="question__title">
        <div className="question__details-container">
          <h4>Title</h4>
          <p>Be specific and imagine you’re asking a question to another person.</p>
          <input
            autoFocus
            required
            onFocus = {handleTitleFocus}
            onBlur = {handleTitleBlur}
            id="title-input" 
            type="text" 
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          />
          <button className="next"
          onClick={handleClick1}>Next</button>    
        </div>

        {isTitleFocused &&
        <div id="question-suggestion" className="question__details-main-container-info">
          <h3>Writing a good title</h3>
          <div className="question__details-main-container-info1">
            <img src={pencil} alt="pencil"/>
            <div className="info">
              <p>Your title should summarize the problem.</p>
              <p>You might find that you have a better idea of your title after writing out the rest of the question.</p>
            </div>
          </div>
        </div> }
      </div>

      <div className="question__details-main-container"
      onFocus = {handleBodyFocus}
      onBlur={handleBodyBlur}>
        <div className="question__details-container">
          <h4>What are the details of your problem?</h4>
          <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
          <div className="wrapper1">
            <ReactQuill
            theme = "snow"
            className="quill1"
            tabIndex="1"
            value={value1}
            ref={reactQuillRef1}
            onChange={handleReactQuill1}
            modules={modules}
            preserveWhitespace={true}
            />
          </div>
          <button className="next"
          onClick={handleClick2}>Next</button>
        </div>

        {isBodyFocused &&
        <div id="question-suggestion" className="question__details-main-container-info">
          <h3>Introduce the problem</h3>
          <div className="question__details-main-container-info1">
            <img src={pencil} alt="pencil"/>
            <div className="info">
              <p>Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.</p>
            </div>
          </div>
        </div> }
      </div>

      <div className="question__details-main-container"
      onFocus = {handleDetailedFocus}
      onBlur={handleDetailedBlur}>
        <div className="question__details-container">
          <h4>What did you try and what were you expecting?</h4>
          <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
          <div className="wrapper1">
            <ReactQuill 
              theme = "snow"
              className="quill1"
              tabIndex="2"
              value={value2}
              ref={reactQuillRef2}
              onChange={handleReactQuill2}
              modules={modules}
              preserveWhitespace={true}
            /> 
          </div>
          <button className="next" onClick={handleClick3}>Next</button>
        </div>

        {isDetailsFocused &&
        <div id="question-suggestion" className="question__details-main-container-info">
          <h3>Expand on the problem</h3>
          <div className="question__details-main-container-info1">
            <img src={pencil} alt="pencil"/>
            <div className="info">
              <p>Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.</p>
              <p>
              Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.
              </p>
              <p>
              Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.
              </p>
            </div>
          </div>
        </div> }
      </div>

      <div className="main__tags-container" tabIndex="3" id="tag-div"> 
        <div className="tags__container">
          <h4>Tags</h4>
          <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
          </p>
          <div className="tag-input">
            {tags.map((item, index) => (
              <span key={index} onClick={() =>removeTags(index)} className="main-tag">{item}
                <button className="remove-btn">&times;</button>
              </span>
            ))}
            <input
              id="tag-input"
              type="text"
              value={tagValue}
              ref={tagInputRef}
              onFocus = {handleTagFocus}
              onBlur = {handleTagBlur}
              onChange={handleTagChange}
              onKeyDown={handleKeyDown}
              placeholder={hasEnteredTags ?(" ") : ("e.g  (javascript, react)")}  
            />
          </div>
          <button className="next">Next</button>    
        </div>

        {isTagFocused &&
        <div id="question-suggestion" className="question__details-main-container-info">
          <h3>Adding Tags</h3>
          <div className="question__details-main-container-info1">
            <img src={pencil} alt="pencil"/>
            <div className="info">
              <p>Tags help ensure that your question will get attention from the right people.</p>
              <p>Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.</p>
            </div>
          </div>
        </div> }
      </div>

      <button className="submit" type="submit">
        Post Your Question
      </button>
    </form>
  )
}

export default AskQuestion
