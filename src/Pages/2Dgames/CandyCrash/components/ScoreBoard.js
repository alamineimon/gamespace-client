import { Link } from "react-router-dom";

const ScoreBoard = ({ score }) => {

  return (
    <div className="score-board ml-3">
      <h2 className="font-bold text-2xl mb-4">{score} Scores</h2>
      <Link to='/2dgames'
        className="bg-primary px-5 text-black py-2 mt-5"
      >Play Another</Link>
    </div>
  )
}
export default ScoreBoard;