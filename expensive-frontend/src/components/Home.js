import { Card } from "antd";
import React from "react";
import '../App.css'
const Home = () => {
  return (
    <div className="home">
      <Card style={{
        width: 400,
        backgroundColor: "white",
      }}>
        <h4>About</h4>
        <h5>
          An Expense Tracking app which can take in users details and budget that user as in hand, track expenses made by user under different categories, edit, delete and update expenses
        </h5>

      </Card>
    </div>

  )
}

export default Home