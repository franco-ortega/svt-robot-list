const Filter = ({ setSearchId }) => {
  return (
    <div className='p-1'>
      <label className='fs-4' htmlFor='robotId'>
        Filter by Robot ID:
        <input
          className='ms-1 w-25 text-center'
          placeholder='ID'
          id='robotId'
          name='robotId'
          type='number'
          onChange={(e) => setSearchId(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
