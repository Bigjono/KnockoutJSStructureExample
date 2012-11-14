using System.Collections.Generic;
using System.Web.Http;
using Knockout4.Data.Mock;
using Knockout4.Models;

namespace Knockout4.Controllers
{
    public class StaffController : ApiController
    {
        #region deps
        private readonly StaffReader _staffReader;
        #endregion

        #region ctor
        public StaffController(StaffReader staffReader)
        {
            _staffReader = staffReader;
        }
        #endregion


        // GET api/staff
        public IEnumerable<Staff> Get()
        {
            return _staffReader.GetAll();
        }

        // GET api/staff/5
        public Staff Get(int id)
        {
            return _staffReader.GetMember(id);
        }

        // POST api/staff
        public void Post([FromBody] string value)
        {
        }

        // PUT api/staff/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/staff/5
        public void Delete(int id)
        {
        }
    }


}
