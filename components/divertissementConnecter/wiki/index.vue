<template>
<div class="bg-white">
    <table>
      <tbody>
        <tr>
          <td id="box-1-1" class="box" @click="pushBox"></td>
          <td id="box-1-2" class="box" @click="pushBox"></td>
          <td id="box-1-3" class="box" @click="pushBox"></td>
        </tr>
        <tr>
          <td id="box-2-1" class="box" @click="pushBox"></td>
          <td id="box-2-2" class="box" @click="pushBox"></td>
          <td id="box-2-3" class="box" @click="pushBox"></td>
        </tr>
        <tr>
          <td id="box-3-1" class="box" @click="pushBox"></td>
          <td id="box-3-2" class="box" @click="pushBox"></td>
          <td id="box-3-3" class="box" @click="pushBox"></td>
        </tr>
      </tbody>
    </table>
</div>
  </template>
  <script>
  export default {
    name: "TableComponent",
    data() {
      return {
        positions: [],
        changeTurn: true,
      };
    },
    watch: {
      changeTurn() {
        const gamePlayer1 = this.positions.filter((game) => {
          return game.player === "p1";
        });
        const gamePlayer2 = this.positions.filter((game) => {
          return game.player === "p2";
        });
        console.log(gamePlayer1, gamePlayer2);
  
        // If player 1 win
        // let numberRowPlayer1 = "";
        // let numberFilePlayer1 = "";
  
        // gamePlayer1.forEach((element) => {
        //   numberRowPlayer1 += element.row;
        //   numberFilePlayer1 += element.file;
        // });
  
        // if (
        //   this.filterRowFiles(numberRowPlayer1) ||
        //   this.filterRowFiles(numberFilePlayer1)
        // ) {
        //   console.log("Player 1 win");
        // }
  
        // // If player 2 win
        // let numberRowPlayer2 = "";
        // let numberFilePlayer2 = "";
  
        // gamePlayer2.forEach((element) => {
        //   numberRowPlayer2 += element.row;
        //   numberFilePlayer2 += element.file;
        // });
  
        // if (
        //   this.filterRowFiles(numberRowPlayer2) ||
        //   this.filterRowFiles(numberFilePlayer2)
        // ) {
        //   console.log("Player 2 win");
        // }
      },
    },
    methods: {
      pushBox(event) {
        const $boxPushed = document.querySelector(`#${event.target.id}`);
        if (this.changeTurn) {
          $boxPushed.innerText = "x";
          $boxPushed.classList.add("equis");
        } else {
          $boxPushed.innerText = "o";
          $boxPushed.classList.add("circle");
        }
        let player = this.changeTurn ? "p1" : "p2";
        let data = event.target.id.split("-");
        let row = data[1];
        let file = data[2];
        const game = {};
        game.player = player;
        game.row = row;
        game.file = file;
        this.positions.push(game);
  
        this.changeTurn = !this.changeTurn;
        // console.log(this.positions);
        $boxPushed.style.pointerEvents = "none";
      },
      filterRowFiles(stringNumber) {
        let n1 = stringNumber.filter((number) => {
          return number === "1";
        }).length;
        let n2 = stringNumber.filter((number) => {
          return number === "2";
        }).length;
        let n3 = stringNumber.filter((number) => {
          return number === "3";
        }).length;
        if (n1 === 3 || n2 === 3 || n3 === 3) {
          console.log("game finish");
          return true;
        } else {
          return false;
        }
      },
    },
  };
  </script>
  <style scoped>
  table {
    margin: 40px auto;
  }
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
  .equis {
    font-size: 70px;
    color: rgb(37, 62, 145);
  }
  .circle {
    font-size: 70px;
    color: red;
  }
  </style>