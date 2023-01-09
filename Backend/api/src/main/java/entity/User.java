package entity;

import entity.share.FileResource;
import entity.share.UserNameResource;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "user_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Id
    @Column(name = "property_id")
    private String propertyId;
    @Column(name = "contact_number")
    private String contactNumber;

    @Embedded
    private UserNameResource name;

    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "is_account_non_expired")
    private boolean isAccountNonExpired;
    @Column(name = "is_account_non_locked")
    private boolean isAccountNonLocked;
    @Column(name = "is_credentials_non_expired")
    private boolean isCredentialsNonExpired;
    @Column(name = "is_enabled")
    private String isEnabled;
    @Column(name = "prefix")
    private String prefix;

    @Embedded
    private FileResource avatar;



}
