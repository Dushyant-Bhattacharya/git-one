


var div = document.createElement('div');
div.innerHTML=`<div class="container-md" style="margin-top: 100px">
<div
  class="row align-content-center"
  id="frow"
  data-bs-spy="scroll"
  data-bs-target="#list-example"
  data-bs-offset="0"
  tabindex="0"
>
  <div class="col-12 align-content-center text-center" id="r1">
    <h
      class="text-center fw-bold fst-italic display-1"
      style="color: white; text-shadow: 0px 0px 10px"
    >
      JUMBO TRAY
    </h>
  </div>
  <div
    class="col-12 align-content-center text-md-center "
    id="order_1 list-item-1"
  >
  <div class="input-group flex-nowrap mt-5">
      <span class="input-group-text fs-4" >Name</span>
      <input type="text" class="form-control" id="NAME" aria-label="Username" aria-describedby="addon-wrapping">
      
    </div>
    <div class="input-group flex-nowrap mt-2">
      <span class="input-group-text fs-4" >Phone Number</span>
      <input type="text" class="form-control" id="PHONE" aria-label="Username" aria-describedby="addon-wrapping">
      
    </div>
  </div>
  <div
    class="col-12 align-content-center text-md-center mt-5"
    id="order_1"
  >
    <!-- name parameter links all the options together -->
    <select
      class="form-select form-select-lg mb-3 shadow"
      aria-label=".form-select-lg example"
      name="order-1"
      id="order-1"
    >
      <option selected value="0">Select Item</option>
      <option value="1">Veg Momos</option>
      <option value="2">Paneer Momos</option>
      <option value="3">Chowmine</option>
      <option value="4">Finger chips</option>
      <option value="5">Chilli Potato</option>
      <option value="6">Dragon Momos</option>
      <option value="7">Veg Burger</option>
      <option value="8">Cheese Burger</option>
      <option value="9">Cheese Loaded Finger Chips</option>
      <option value="10">Manchurian</option>
    </select>

    <select
      class="form-select form-select-lg mb-3 shadow"
      aria-label=".form-select-lg example"
      name="order-size-1"
      id="order-size-1"
    >
      <option selected value="0">Select Plate Size</option>
      <option value="1">Quarter Plate</option>
      <option value="2">Half Plate</option>
      <option value="3">Full Plate</option>
    </select>

    <select
      class="form-select form-select-lg mb-3 shadow"
      aria-label=".form-select-lg example"
      name="order-quantity-1"
      id="order-quantity-1"
    >
      <option selected value="0">Qty</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
    </select>

    <button class="btn btn-danger col-12" disabled id="delete-1">
      Delete Order
    </button>
    <hr class="border-5 border-top border-dark" />
  </div>
  <div id="jsnodes">
    <div id="jsnodes1"></div>
  </div>

  <div class="col-12 text-center text-lg-end mt-3" id="order_1">
    <button class="btn btn-warning col-lg-3 col-5" id="ADD">ADD</button>
    <button
      class="btn btn-success col-lg-3 col-5"
      id="RECEIPT"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      Receipt
    </button>
    <!-- <hr class="border-5 border-top border-dark" /> -->
  </div>

  <div class="result">
    <!-- side pop over for the results -->

    <div
      class="offcanvas offcanvas-end "
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          Receipt
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          id="side-close"
        ></button>
      </div>

      <div class="offcanvas-body" id="result-body"></div>

      <!-- <button class="btn btn-success fw-bold">SAVE</button> -->
    </div>

  </div>
</div>
</div>`;

window.addEventListener("load",()=>
{
  document.getElementById('contain').append(div);
  var call = new XMLHttpRequest();
  call.open("GET", "./price.json");
  call.send();
  var price = null;
  var c1 = 1;
  // grabing the elements from the document
  var master = document.getElementById("frow");
  
  var box = document.getElementById("order_1");
  var item = document.getElementById("order-1");
  
  const ADD = document.getElementById("ADD");
  const RECEIPT = document.getElementById("RECEIPT");

var obj = {}; // payload for back-end to send this data to server
var items = [
  "None",
  "Veg Momos",
  "Paneer Momos",
  "Chowmine",
  "Finger chips",
  "Chilli Potato",
  "Dragon Momos",
  "Veg Burger",
  "Cheese Burger",
  "Cheese Loaded Finger Chips",
  "Manchurian",
];

//console.log(`this is some thing - > ${items}`); // use backticks to use template literals

var size1 = ["None", "Quarter_plate", "Half_plate", "Full_plate"];

var qty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// receiveing the JSON file and dinamically adding plate size option when an item is selected
function receive() {
  if (c1 == 1) {
    price = call.responseText;
    price = JSON.parse(price);
    console.log(price);
    c1 += 1;
  } else {
  }
}

call.onload = receive;

call.onerror = () => {
  alert("OOPs an error occurred please reload the page");
};

var c = 1; // id-number

// attaching event listeners to elements captured above

// item.addEventListener("click",()=>
// {
//     console.log(item.selectedOptions[0].label);
// });

// size.addEventListener("click",()=>
// {
//     console.log(size.selectedOptions[0].label);
// });

ADD.addEventListener("click", () => {
  c += 1; // because order_1 is already in the html file
  // we did not initialized c with value of 2 because we need to catch all the values

  // assigning order_1 to every clone
  console.log("");
  var order = document.querySelectorAll("#order_1");

  // get elements by id does not return a node type so we have to go with query selector because guess what it does return  a node so now we are able to clone that node using cloneNode(true) funtion and append the clone node

  console.log(order);
  var clone = order[0].cloneNode(true);

  clone.id += " order_" + c;
  var nlist = clone.children;
  for (var i = 0; i < nlist.length - 1; i++) {
    // var clone_new_id=parseInt(clone_old_id)+1;
    // the above line won't work as it will always copy the id of the original node

    // console.log(clone_new_id);
    var noid = nlist[i].id.split("-");
    var clone_new = "";
    for (var j = 0; j < noid.length - 1; j++) {
      clone_new += noid[j] + "-";
    }
    clone_new += c;
    nlist[i].id += " " + clone_new;
    nlist[i].name += " " + clone_new;
    // console.log(nlist[i].id);
  }

  // changing the id of all the divs inside this clone div

  nlist[3].removeAttribute("disabled"); // for all the clone nodes only the disabled button will be enabled.

  var row = document.getElementById("jsnodes1");
  row.appendChild(clone);

  // for the first time we will capture values from the html itself and increase the counter and then if counter >1 then we wiil capture values from the clone variable itself.

  // item=document.getElementById("order-1 order-"+c);
  // box=document.getElementById("order_1 order_"+c);

  // if we did it like this above code then we won't be able to change the previous choice.

  //when the ok button is selected we select the first list and add event lisener to this selection change and dynamically populate the plate size list.
});

function size_list(oEvent, prev_ele) {
  var size_list = oEvent.children;
  console.log(size_list);
  var sizeopt = prev_ele.value; // its working here because we are not using this attribute on getElementbyId function but rather on an oEvent.target ie- oEvent.target.value

  if(sizeopt!=='0')
  {
    console.log("item selected ->" + sizeopt);
    console.log(price[items[sizeopt]]);
    // console.log();

    //   // accessing the json file based on the selection of the items list.

    //   // document.getElementById("two").setAttribute("disabled", "disabled");

    for (var i = 1; i <= 3; i++) {
      var p_list = price[items[sizeopt]][size1[i]];
      if (p_list == undefined) {
        size_list[i].setAttribute("disabled", "disabled");
        console.log(size_list[i]);
      } else {
        size_list[i].removeAttribute("disabled");
      }
    }
  }
  
}

// item.addEventListener("change",size_list);

// RECEIPT.addEventListener("click", () => {
//   var order = document.querySelectorAll("#order_1");
//   var sum = 0;

//   console.log(items[order[0].children["order-1"].value]);
// });

//-------------------------------------------------------------------------------------
// MASTER SECTION
master.addEventListener("click", (oEvent) => {
  // console.log("master hit");
  // console.log(oEvent);

  item = document.getElementById(oEvent.target.id);
  if (oEvent.target.id.includes("order-1")) {
    // console.log(item.nextElementSibling);
    size_list(item.nextElementSibling, oEvent.target);
  }

  // remove class border-danger from all the 3 selects boxes , when any block is selected.

  // only call this function when a target conatins order-1
  //find the next sibling node and populate the enbaled options

  if (oEvent.target.id.includes("delete-1")) {
    del(oEvent);
  }
});

//------------------------------------------------------------------------------------------

var save_btn = undefined;

RECEIPT.addEventListener("click", () => {
  var result = document.getElementById("result-body");
  if (result.hasChildNodes() == true) {
    side_canvas_close(); // remove content of the receipt off canvus
  }

  var size_lst = [];
  var item_lst = [];
  var qty_lst = [];

  console.log("RECEIPT hit");

  if (document.getElementById("order-1").value != "0") {
    item_lst.push(items[parseInt(document.getElementById("order-1").value)]);
  }
  // else
  // {
  //   document.getElementById("order-1").classList.add("border-danger","border-2");
  //   item_lst.push(items[parseInt(document.getElementById("order-1").value)]);
  // }
  if (document.getElementById("order-size-1").value != "0") {
    size_lst.push(
      size1[parseInt(document.getElementById("order-size-1").value)]
    );
  }
  // else
  // {
  //   document.getElementById("order-size-1").classList.add("border-danger","border-2");
  //   size_lst.push(size1[parseInt(document.getElementById("order-size-1").value)]);
  // }
  if (document.getElementById("order-quantity-1").value != "0") {
    qty_lst.push(
      qty[parseInt(document.getElementById("order-quantity-1").value)]
    );
  }
  // else
  // {
  //   document.getElementById("order-quantity-1").classList.add("border-danger","border-2");
  //   qty_lst.push(qty[parseInt(document.getElementById("order-quantity-1").value)]);
  // }

  // this above has to be done manually because this is the master node from which we are cloning . And the cloned nodes are put inside a div with id jsnodes.

  // add error outline for jsnodes.

  var js_nodes = document.querySelectorAll("#jsnodes1")[0].children;
  // js_nodes contains all the information of the nodes inside it

  // var receipt_canvas = document.getElementById("offcanvasExample");
  // receipt_canvas.style.marginRight="58%";
  
  // receipt_canvas.style.transition="margin-right 500ms";
  // setTimeout(()=>
  // {
  //   receipt_canvas.classList.remove("offcanvas-end");
  // receipt_canvas.classList.add("offcanvas-start");  
  // },500);


  for (var i = 0; i < js_nodes.length; i++) {
    var childs = js_nodes[i].children;
    // console.log(childs);
    item_lst.push(items[parseInt(childs[0].value)]);
    size_lst.push(size1[parseInt(childs[1].value)]);
    qty_lst.push(qty[parseInt(childs[2].value)]);
  }

  console.log(item_lst, size_lst, qty_lst);
  var name = document.getElementById("NAME").value;
  var phone = document.getElementById("PHONE").value;

  // selecting the div with id result-body

  var res = document.createElement("div");
  res.id = "res";
  result.appendChild(res);
  res.appendChild(document.createElement("hr"));
  // Inserting Customer Name and Phone No.
  let ele1 = document.createElement("h4");
  let ele2 = document.createElement("h4");
  ele1.innerText = "Name -" + name;
  console.log(ele1);
  res.appendChild(ele1);
  res.appendChild(document.createElement("hr"));
  ele2.innerText = "Phone no. -" + phone;
  console.log(ele2);
  res.appendChild(ele2);
  res.appendChild(document.createElement("hr"));

  // Calculating the cost
  var sum = 0;
  for (var i = 0; i < item_lst.length; i++) {
    var cost = price[item_lst[i]][size_lst[i]] * qty_lst[i];
    console.log(cost);
    sum += cost;

    // Creating html elements in order to insert into the div with id - result-body

    var s =
      item_lst[i] +
      "(" +
      size_lst[i] +
      ")" +
      " x " +
      qty_lst[i] +
      "  =    " +
      "₹" +
      cost;
    var h3 = document.createElement("h5");
    h3.innerText = s;
    res.appendChild(h3);
  }

  // creating the payload -
  obj.item_lst = item_lst;
  obj.size_lst = size_lst;
  obj.qty_lst = qty_lst;
  // obj.sum = sum;
  obj.timestamp = new Date().getTime();
  obj.name = name;
  obj.phone = phone;



  res.appendChild(document.createElement("hr"));
  var total = document.createElement("h1");
  total.classList.add("text-end", "me-3");
  total.innerHTML = "TOTAL =   ₹" + sum;

  res.appendChild(total);

  // adding the save button for the receipt

  save_btn = document.createElement("button");
  save_btn.type = "submit";
  save_btn.className = "btn btn-success fw-bold col-12 mt-5";
  save_btn.innerText = "SAVE";
  save_btn.id = "SAVE";
  save_btn.setAttribute("data-bs-dismiss", "offcanvas");
  res.appendChild(save_btn);

  var modal1 = null;
  var myModal = null;

  save_btn.addEventListener("click", () => {
    modal1 = document.createElement("div");
    modal1.innerHTML = `<div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
          <div class="modal-body">
          
        </div>
      </div>
    </div>
  </div>`; // use back ticks for these type of html tag injection.
    var img = undefined;
    var time= 1; // 1 for success and 0 for fail
    var res_text=undefined;
    // Sending Varibales to node starts here --------------------------------------------
    console.log(JSON.stringify(obj));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./saveData");
    xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.setRequestHeader("Body",JSON.stringify(obj));
    // jugaad way of sendiing data to node js
    xhr.send(JSON.stringify(obj));

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Post successfully created!");
        document.body.append(modal1);

        myModal = new bootstrap.Modal(document.querySelector(".modal"));

        var result = JSON.parse(xhr.response);
        if (result.received == true) {
          img = `<img id="gif" src="./success" style="width:50%; margin-left:25%;">`;
          time=1;
        } else {
          img = `<img id="gif" src="./fail" style="width:50%; margin-left:25%;">`;
          res_text=`<h4 class="text-center">Please Try Again, Some Error Occured!!</h4>`;
          // console.log(result.error);
          time=0;
        }
        
        
        document.querySelector(".modal-body").innerHTML=img;
        if(res_text!=undefined)
        {
          document.querySelector(".modal-body").innerHTML=img+res_text;
        }
        document.getElementById("gif").addEventListener("load", () => {
          // document.getElementById("gif").src=xhr1.response;
          myModal.show();
        });
        
      } else {
        console.log("error in post call");
      }
    };

    // Sending Variables to node ends here -----------------------------------------------

    modal1.addEventListener("shown.bs.modal", () => {


      // set the timeout according to the fail or success call due to different time of animation of the gif
      if(time==1)
      {
        setTimeout(() => {
          myModal.hide();
        }, 1600);
      }
      if(time == 0)
      {
        setTimeout(() => {
          myModal.hide();
        }, 3000);
      }
      
    });

    modal1.addEventListener("hide.bs.modal", () => {
      // for a fail call it should not reset the harcoded values.

      // resetting the hard coded and dynamically added nodes and their details.
      if(time ==1 )
      {
        document.getElementById("NAME").value = "";
      document.getElementById("PHONE").value = "";

      document.getElementById("order-1").value = "0";
      document.getElementById("order-size-1").value = "0";
      document.getElementById("order-quantity-1").value = "0";
      document.getElementById("jsnodes1").innerHTML = "";
      }
      

      side_canvas_close();
      modal1.remove();
      myModal.dispose();

      
      document.body.style.overflow = "auto";
    });
  });
});

var side_close = document.getElementById("side-close");
side_close.addEventListener("click", side_canvas_close);
function side_canvas_close() {
  var result = document.getElementById("result-body");
  var res = document.getElementById("res");

  result.removeChild(res);
}
function del(oEvent) {
  document.getElementById("jsnodes1").removeChild(oEvent.path[1]);
}
});
