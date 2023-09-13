import React from "react";
import css from "./Dashboard.module.css";
import { cardsData, groupNumber } from "../../data/index.js";
import Statistics from "../../Components/statistics/Statistics";
import Orders from "../../Components/orders/Orders";

const Dashboard = () => {
  return (
    <div className={css.container}>
      {/* Left Side of dashboard Page */}

      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationBtn}>
              <select name="" id="">
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>

          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div className={css.card} key={index}>
                <div className={css.cardhead}>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>

                <div className={css.cardamount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Statistics />
      </div>

      {/* right side of dashboard Page */}

      <Orders />
    </div>
  );
};

export default Dashboard;














// all rights reserved by Tahreem Zafar...
//  Built by Tahreem Zafar  TZ...

//    SHFFTJOM......
