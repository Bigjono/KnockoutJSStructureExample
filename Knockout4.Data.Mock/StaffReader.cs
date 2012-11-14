using System.Collections.Generic;
using System.Linq;
using Knockout4.Models;

namespace Knockout4.Data.Mock
{
    public class StaffReader
    {

        public List<Staff> GetAll()
        {

            return new List<Staff>
                {
                    new Staff()
                        {
                            EmailAddress = "bruce@wayneenterprise.com",
                            Id = 1,
                            FirstName = "Bruce",
                            Surname = "Wayne",
                            Mobile = "0123345668",
                            Telephone = "132134654796"
                        },
                    new Staff()
                        {
                            EmailAddress = "bruce@hulk.com",
                            Id = 2,
                            FirstName = "Bruce",
                            Surname = "Banner",
                            Mobile = "0123345668",
                            Telephone = "132134654796"
                        },
                    new Staff()
                        {
                            EmailAddress = "peter@insects.com",
                            Id = 3,
                            FirstName = "Peter",
                            Surname = "Parker",
                            Mobile = "0123345668",
                            Telephone = "132134654796"
                        },
                    new Staff()
                        {
                            EmailAddress = "tony@stark.com",
                            Id = 4,
                            FirstName = "Tony",
                            Surname = "Start",
                             Mobile = "0123345668",
                            Telephone = "132134654796"
                        },
                    new Staff()
                        {
                            EmailAddress = "eric@fruitnveg.com",
                            Id = 5,
                            FirstName = "Eric",
                            Surname = "Wimp",
                            Mobile = "0123345668",
                            Telephone = "132134654796"
                        }


                };


        }

        public Staff GetMember(int id)
        {
            return GetAll().SingleOrDefault(x => x.Id == id);
        }
    }
}
