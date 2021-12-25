// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Buttons from '../components/Buttons';
// import { getTaskList } from '../store/tasksList/actions';

// import DataTable from '../components/DataDisplay';

// const Tasks = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTaskList());
//   }, []);
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'taskName', headerName: 'Task Name', width: 130 },
//     { field: 'updateBtn', headerName: 'Update', width: 130 },
//     { field: 'DelBtn', headerName: 'Delete', width: 130 },
//   ];
//   // const columns = [
//   //   { id: 'id', label: 'Name', minWidth: 170 },
//   //   { id: 'taskName', label: 'ISO\u00a0Code', minWidth: 100 },
//   //   {
//   //     id: 'population',
//   //     label: 'Population',
//   //     minWidth: 170,
//   //     align: 'right',
//   //     format: value => value.toLocaleString('en-US'),
//   //   },
//   //   {
//   //     id: 'size',
//   //     label: 'Size\u00a0(km\u00b2)',
//   //     minWidth: 170,
//   //     align: 'right',
//   //     format: value => value.toLocaleString('en-US'),
//   //   },
//   //   {
//   //     id: 'density',
//   //     label: 'Density',
//   //     minWidth: 170,
//   //     align: 'right',
//   //     format: value => value.toFixed(2),
//   //   },
//   // ];
//   const taskLists = useSelector(state => state.tasks);
//   const gridData = taskLists.data?.map(task => task);

//   console.log(taskLists, gridData);
//   console.log();
//   return taskLists.data ? (
//     <div className='container'>
//       <DataTable rs={gridData} cols={columns} />
//     </div>
//   ) : (
//     <>
//       <div>
//         <h1>Loading...</h1>
//       </div>
//     </>
//   );
// };

// export default Tasks;

import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Buttons from '../components/Buttons';
import {
  addTask,
  deleteTask,
  getTaskList,
  getTaskPagination,
  updateTask,
} from '../store/tasksList/actions';
import ReactPaginate from 'react-paginate';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DataTable from '../components/DataDisplay';
import Pagination from '../layout/Pagination';
import FormsInputs from '../components/FormsInputs';
import '../scss/tasks.scss';
import { IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  input: {
    height: '.7rem',
  },
}));

let PageSize = 10;
const Tasks = () => {
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getTaskList());
    console.log(update);
  }, []);
  const [description, setDescription] = useState('');
  const taskLists = useSelector(state => state.tasks);
  const gridData = taskLists.data?.map(task => task);

  console.log(taskLists, gridData);
  console.log();
  const handePageChange = data => {
    console.log(data.selected + 1);
    dispatch(getTaskPagination(10, 0));
  };
  return taskLists.data ? (
    <div className='container'>
      <form
        className='row justify-content-center  align-items-center py-4 mx-auto'
        onSubmit={e => {
          e.preventDefault();
          e.target[0].value === ''
            ? alert('Please add the name of the task')
            : dispatch(
                addTask({
                  description,
                })
              );
        }}
      >
        <FormsInputs
          types={'text'}
          showenText={'Type New Task Here...'}
          names={'addTask'}
          labels={'Add New Task'}
          styles={'my-5 mx-4 col-9 w-50 p-0 h-50'}
          handleChange={e => {
            setDescription(e.target.value);
            console.log(description, 'The task');
          }}
        />
        <Buttons
          styles={'col-1 '}
          howBig={'large'}
          label={'Add'}
          shape={'contained'}
          TSubmit={'submit'}
        />
      </form>
      <div className='table-responsive'>
        <table className='table table-striped table-hover table-bordered table-light'>
          <thead className='table-light'>
            <tr>
              <th scope='col'>No.</th>
              <th scope='col'>Task Name</th>
              <th scope='col' className='text-center'>
                Update
              </th>
              <th scope='col' className='text-center'>
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {gridData.length ? (
              gridData.map((task, index, arr) => (
                <tr key={Math.random()}>
                  <th scope='row'> {index + 1} </th>
                  <td
                    className='w-25'
                    style={{
                      height: '.5rem',
                    }}
                  >
                    {update ? (
                      <div>
                        <form
                          className='row'
                          onSubmit={e => {
                            e.preventDefault();

                            dispatch(
                              updateTask(
                                {
                                  description,
                                },
                                task._id
                              )
                            );
                          }}
                        >
                          <FormsInputs
                            styles={`w-50 me-4 input_hight ${classes.input}`}
                            types={'text'}
                            showenText={'Type New Task Here...'}
                            names={'addTask'}
                            labels={'Add New Task'}
                            handleChange={e => {
                              setDescription(e.target.value);
                              console.log(description, 'The task');
                            }}
                          />
                          <Buttons
                            styles={'col-1 '}
                            howBig={'small'}
                            label={'update'}
                            shape={'contained'}
                            TSubmit={'submit'}
                          />
                        </form>
                      </div>
                    ) : (
                      task.description
                    )}
                  </td>
                  <td className='text-center pointer'>
                    <button
                      id={`${task._id}`}
                      onClick={e => {
                        if (e.target.id === task._id)
                          setUpdate(updt => (updt = !updt));

                        console.log(update);
                      }}
                    >
                      update
                    </button>
                  </td>
                  <td className='text-center'>
                    <DeleteIcon
                      className={`pointer ${classes.root} text-danger`}
                      onClick={() => {
                        console.log(task._id);
                        const filtered = gridData.filter(
                          e => e._id !== task._id
                        );
                        console.log(
                          JSON.stringify(filtered) + ' this is the filtred data'
                        );
                        dispatch(deleteTask(task._id, filtered));
                      }}
                    >
                      <IconButton
                        size='medium'
                        aria-label='delete'
                      ></IconButton>
                    </DeleteIcon>
                  </td>
                </tr>
              ))
            ) : (
              <tr className='text-center'>
                <td colspan='4'> there is no tasks</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='text-dark'>
        <ReactPaginate
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          pageCount={Math.ceil(taskLists?.count / PageSize)}
          marginPagesDisplayed={4}
          pageRangeDisplayed={2}
          onPageChange={handePageChange}
          containerClassName={'pagination justify-content-center text-black '}
          pageClassName={'page-item primaryColor'}
          pageLinkClassName={'page-link primaryColor'}
          previousClassName={'page-item primaryColor'}
          previousLinkClassName={'page-link primaryColor'}
          nextClassName={'page-item primaryColor'}
          nextLinkClassName={'page-link primaryColor'}
          breakClassName='page-item primaryColor'
          breakLinkClassName='page-link primaryColor'
          activeClassName='active'
        />
      </div>
    </div>
  ) : (
    <>
      <div>
        <h1>Loading...</h1>
      </div>
    </>
  );
};

export default Tasks;
