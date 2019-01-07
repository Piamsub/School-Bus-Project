using Common.Helpers;
using Model.DTOs;
using Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Service.Services
{
    public class AuthenticationService : SqlDataAccess
    {
        public userDTO GetUser()
        {
            using (var command = new SqlCommand())
            {
                command.CommandText = "[SP_GET_USER]";
                command.Parameters.Add(new SqlParameter("@USER_ID", 22));
                command.CommandType = CommandType.StoredProcedure;
                return this.GetDataObject<userDTO>(command);
            }
        }
    }
}
