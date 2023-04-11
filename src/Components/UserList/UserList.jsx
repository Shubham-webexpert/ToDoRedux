import { Box, Button, styled } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteAll, DeleteItem } from "../../Actions/actions";
import { useDispatch, useSelector } from "react-redux";

const UserList = ({item}) => {
  const dispatch = useDispatch();
  const list=useSelector((state)=>state.Items.items);

  // console.log("list",list);

  const TContainer = styled(Box)`
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
  `;
  const Table = styled("table")`
    border: 1px solid black;
    border-collapse: collapse;
    width:61%
  `;
  const TR = styled("tr")`
    border: 1px solid black;
  `;
  const TH = styled("th")`
    border: 1px solid black;
    padding: 15px 25px;
    background-color: royalblue;
    color: #fff;
  `;
  const TD = styled("td")`
    border: 1px solid black;
    padding: 5px;
  `;
  return (
    <div>
      <TContainer>
        <Table>
          <thead>
            <TR>
              <TH>Item Id</TH>
              <TH>Item Name</TH>
              <TH colSpan={2}>Action</TH>
            </TR>
          </thead>
          <tbody>
          {
            list.map((ele)=>{
              return(
                <TR key={ele.id}>
                <TD>{ele.id}</TD>
                <TD>{ele.data}</TD>
                <TD>
                  <Button onClick={()=>dispatch(DeleteItem(ele.id))}>
                    <DeleteIcon style={{ color: "red" }} />
                  </Button>
                </TD>
              </TR>
              )
            })
          }
            
          </tbody>
        </Table>
        </TContainer>
        <Button  variant="contained" style={{width:"61%",marginTop:"10px"}} onClick={()=>dispatch(DeleteAll())}>Delete All</Button>
    </div>
  );
};

export default UserList;
