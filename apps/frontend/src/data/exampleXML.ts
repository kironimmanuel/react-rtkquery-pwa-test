export const rawXML = `
<form>
    <model>
        <!-- FORM SECTION -->
        <dataset id="default">
            <element id="record" type="number" nullable="false">
                <precision>12</precision>
            </element>
            <element id="firstName" type="text" nullable="false" maxlength="20">
                <max-length>20</max-length>
            </element>
            <element id="lastName" type="text" nullable="false" maxlength="20">
                <max-length>20</max-length>
            </element>
            <element id="email" type="text" nullable="true" maxlength="50">
                <max-length>50</max-length>
            </element>
            <element id="phone" type="text" nullable="false" maxlength="50">
                <max-length>50</max-length>
            </element>
            <element id="bio" type="text" nullable="false" maxlength="100">
                <max-length>100</max-length>
            </element>
            <element id="birthday" type="date" nullable="false" />
        </dataset>

        <!-- FORM SECTION -->
        <dataset id="tabelle 1">
            <element id="record" type="number" nullable="false">
                <precision>12</precision>
            </element>
            <element id="username" type="text" nullable="true">
                <max-length>20</max-length>
            </element>
            <!-- SELECT FIELD -->
            <element id="role" type="select" nullable="false">
                <option>designer</option>
                <option>developer</option>
                <option>tester</option>
                <option>product owner</option>
                <option>scrum master</option>
            </element>
            <element id="isAdmin" type="checkbox" nullable="false" />
        </dataset>

        <!-- FORM SECTION -->
        <dataset id="tabelle 2">
            <element id="record" type="number" nullable="false">
                <precision>12</precision>
            </element>
            <element id="username" type="text" nullable="true">
                <max-length>20</max-length>
            </element>
            <element id="isAdmin" type="checkbox" nullable="false" />
        </dataset>
    </model>
</form>`;
