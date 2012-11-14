using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Knockout4.Models
{
    public class Staff
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string EmailAddress { get; set; }
        public string Telephone { get; set; }
        public string Mobile { get; set; }


    }



    public class  Department
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public Staff Manager { get; set; }
        public List<Staff> Members { get; set; }

    }
}